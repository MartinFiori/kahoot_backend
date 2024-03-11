import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Rooms, User } from './entity/games.entity';

@WebSocketGateway()
export class GamesGateway {
  // constructor(private rooms: []) {}
  @WebSocketServer()
  server: Server;

  // private rooms = new Map():Rooms;
  private rooms: Rooms = new Map<string, string[]>();

  // handleConnection(client: any, ...args: any[]) {
  //   console.log('Client connected: ' + client.id);
  // }

  handleDisconnect(socket: any, ...args: any[]) {
    const { room_id } = socket.handshake.auth;
    console.log(room_id);
    if (room_id) {
      const roomFound = this.rooms.get(room_id);
      if (roomFound) {
        roomFound.filter((user_id) => user_id != socket.id);
      }
    }
    console.log('Client disconnected: ' + this.rooms.get(room_id));
  }

  // @SubscribeMessage('welcome')
  // handleEvent(@ConnectedSocket() client: Socket, @MessageBody() data: string) {
  //   // ...
  //   this.server.emit('welcome_message', this.rooms);
  // }

  @SubscribeMessage('create_room')
  connectToRoom(
    @ConnectedSocket() socket: Socket,
    @MessageBody() room_id: string,
  ) {
    // creo la sala
    this.rooms.set(room_id, [socket.id]);
    socket.handshake.auth.room_id = room_id;
    console.log(this.rooms);
  }

  @SubscribeMessage('join_shared_room')
  joinSharedRoom(
    @ConnectedSocket() socket: Socket,
    @MessageBody() client_room_id: string,
  ) {
    const roomFound = this.rooms.get(client_room_id);
    roomFound.push(socket.id);
    socket.handshake.auth.room_id = client_room_id;
    socket.broadcast.to(roomFound).emit("user_connected", `User connected: ${socket.id}`)
    console.log('viendo los usuarios conectados: ', roomFound);
  }
}
