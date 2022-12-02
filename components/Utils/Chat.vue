<template>
  <div>
    <v-card v-show="isChatOpen" class="my-custom-dialog"
            :class="{'fullscreen':fullscreen}">
      <client-only>
        <chat-window
          class="my-chat"
          :rooms="mapRoom"
          current-user-id="1234"
          roomId="1"
          :messages="mapMessages"
          :rooms-list-opened="fullscreen"
          :roomsLoaded="true"
          :messages-loaded="true"
          :height="fullscreen?'calc(100vh)':'500px'"
          :show-audio="false"
          :show-files="false"
          :show-add-room="false"

          @toggle-rooms-list="toggleRoom"
        >
          <template v-slot:room-options>
            <button @click="$store.commit('set_chat_open',false)"
                   class="close-btn ml-auto">
              <font-awesome-icon icon="fa fa-close"></font-awesome-icon>
            </button>
          </template>
        </chat-window>
      </client-only>

    </v-card>
  </div>
</template>

<script>

    import {mapGetters} from "vuex";

    export default {
        loading: false,
        name: "Chat",
        computed: {
            ...mapGetters(['isChatOpen', 'roomList', 'loggedInUser', 'currentRoom',]),
            mapRoom() {
                // const rooms = [];
                // if (this.roomList) {
                //     this.roomList.forEach(item => {
                //         rooms.push({
                //             roomId: item.room_id,
                //             roomName: item.room_name,
                //             avatar: this.$getImagePath(item.avatar),
                //             unreadCount: item.un_read_msg_count,
                //             lastMessage: this.getContent(item.lastMessage),
                //             users: item.user.map(user => {
                //                 return {
                //                     _id: user.id,
                //                     // avatar: this.$getImagePath(user.avatar),
                //                     username: user.username
                //                 }
                //             }),
                //             typingUsers: item.typingUsers ? item.typingUsers : []
                //         })
                //     })
                // }
                // this.loadingRoom = false;
                return this.roomList
            },
            mapMessages() {
                // const msg = [];
                // if (this.messages) {
                //     this.messages.forEach((item, idx) => {
                //         msg.push({
                //             content: item.content ? item.content : '',
                //             seen: item.seen,
                //             disableActions: true,
                //             disableReactions: true,
                //             date: item.date,
                //             timestamp: item.timestamp,
                //             senderId: item.sender_id,
                //             _id: item._id,
                //             indexId: item.indexId,
                //
                //         })
                //     })
                // }
                // return msg.reverse()
                return this.messages
            }
        },
        data() {
            return {
                fullscreen: true,
                loadingRoom: true,
                messages: [
                    {
                        _id: '7890',
                        indexId: 12092,
                        content: 'Message 1',
                        senderId: '1234',
                        username: 'John Doe',
                        avatar: 'assets/imgs/doe.png',
                        date: '13 November',
                        timestamp: '10:20',
                        system: false,
                        saved: true,
                        distributed: true,
                        seen: true,
                        deleted: false,
                        failure: true,
                        disableActions: false,
                        disableReactions: false,
                        files: [
                            {
                                name: 'My File',
                                size: 67351,
                                type: 'png',
                                audio: true,
                                duration: 14.4,
                                url: 'https://firebasestorage.googleapis.com/...',
                                preview: 'data:image/png;base64,iVBORw0KGgoAA...',
                                progress: 88
                            }
                        ],

                        replyMessage: {
                            content: 'Reply Message',
                            senderId:
                                '4321',
                            files:
                                [
                                    {
                                        name: 'My Replied File',
                                        size: 67351,
                                        type: 'png',
                                        audio: true,
                                        duration: 14.4,
                                        url: 'https://firebasestorage.googleapis.com/...',
                                        preview: 'data:image/png;base64,iVBORw0KGgoAA...'
                                    }
                                ]
                        }
                        ,
                    }
                ],
                chatSocket: '',
                status:
                    'disconnect',
                is_typing:
                    false
            }
        },

        watch: {
            isChatOpen(val, oldVal) {
                if (val) {
                    setTimeout(() => {
                        this.fullscreen = false
                    },)
                } else {
                    this.fullscreen = false;
                    this.disconnect()
                }
            },
            fullscreen(val) {
                if (val) {
                    document.body.classList.add('full-screen')
                } else {
                    document.body.classList.remove('full-screen')
                }
            }

        },
        mounted() {
            // this.getRooms();
        },
        methods: {
            check_read(userName, msgId) {
                // if (!document.hidden) {
                //     if (userName !== this.loggedInUser.username) {
                //         this.chatSocket.send(JSON.stringify({
                //             'msg_type': 'MESSAGE_READ',
                //             'msg_id': msgId,
                //             'user': userName
                //         }));
                //     }
                // }
            },
            getContent(item) {
                return item.content ? {...item, timestamp: this.$moment(item.timestamp).fromNow()} : null
            },
            connect(room) {
                // const token = '';
                // this.chatSocket = new WebSocket(
                //     'wss://publicws.hookax.com/ws/chat/chat_' + room + '/?token=' + token);
                // this.chatSocket.onopen = () => {
                //     this.status = "connected";
                //     setTimeout(() => {
                //         this.chatSocket.send(JSON.stringify({
                //             'msg_type': 'ALL_MESSAGE_READ',
                //             'user': this.loggedInUser.username
                //         }));
                //     }, 2000)
                //
                // };
                // this.chatSocket.onmessage = (e) => {
                //     const data = JSON.parse(e.data);
                //     if (data.msg_type === 'ERROR_OCCURED') {
                //         if (data.error_message === 'MESSAGE_OUT_OF_LENGTH') {
                //             console.log('asda')
                //         } else if (data.error_message === 'UN_AUTHENTICATED') {
                //             console.log("You are not authenticated user!!!Login Again..")
                //         }
                //     } else if (data.msg_type === 'TEXT_MESSAGE') {
                //         if (this.isChatOpen) {
                //             this.chatSocket.send(JSON.stringify({
                //                 'msg_type': 'ALL_MESSAGE_READ',
                //                 'user': this.loggedInUser.username
                //             }));
                //         } else {
                //             this.getAllMessages(room)
                //             this.getRooms()
                //         }
                //
                //     } else if (data.msg_type === 'MESSAGE_READ') {
                //         console.log('readed')
                //     }
                //     // else if (data.msg_type === 'IS_TYPING' && data.user !== this.loggedInUser.id) {
                //     //     this.$store.commit('type_user', {room: room, user: data.user})
                //     // } else if (data.msg_type === 'NOT_TYPING' && data.user !== this.loggedInUser.id) {
                //     //     this.$store.commit('remove_type_user', {room: room})
                //     // }
                //     else if (data.msg_type === 'ALL_MESSAGE_READ') {
                //         this.getAllMessages(room)
                //         if (this.fullscreen) {
                //             this.getRooms()
                //         }
                //     }
                // };
            },
            disconnect() {
                // this.chatSocket.close();
                this.status = "disconnected";
            }
            ,
            async fetchMessages(data) {
                // if (data.room && data.room.roomId) {
                //     this.$store.commit('set_current_room', data.room.roomId)
                //     await this.connect(data.room.roomId)
                // }
                // this.chatSocket.send(JSON.stringify({
                //     'msg_type': 'ALL_MESSAGE_READ',
                //     'user': this.loggedInUser.username
                // }));

            }
            ,
            async getRooms() {
                await this.$store.dispatch('getRooms')
            },
            typingMessages(data) {
                if (data.message) {
                    this.is_typing = true;
                    this.typing()
                } else {
                    this.notTyping()
                }
                setTimeout(() => {
                    this.notTyping()
                }, 3000)
            },
            typing() {
                this.chatSocket.send(JSON.stringify({
                    'user': this.loggedInUser.id,
                    'msg_type': 'IS_TYPING',
                }));
            },
            notTyping() {
                if (this.is_typing) {
                    this.chatSocket.send(JSON.stringify({
                        'user': this.loggedInUser.id,
                        'msg_type': 'NOT_TYPING',
                    }));
                    this.is_typing = false
                }
            },
            async sendMessages(data) {
                await this.chatSocket.send(JSON.stringify({
                    'message': data.content,
                    'username': this.loggedInUser.username,
                    'msg_type': 'TEXT_MESSAGE',
                }));
            },
            async getAllMessages(room) {
                try {
                    const res = await this.$axios.$get('/chat/' + room + '/', {progress: false})
                    this.messages = res.data
                } catch (e) {

                }
            },
            toggleRoom(val) {
                this.fullscreen = val.opened
            }
        }
    }
</script>

<style lang="scss">
  .my-custom-dialog {
    position: fixed;
    right: 10px;
    bottom: 10px;
    width: 400px;
    z-index: 999;
    box-shadow: 0 0 12px 12px #0000001c !important;
    max-width: 100%;

    &.fullscreen {
      width: 100%;
      right: 0;
      left: 0;
      bottom: 0;
    }

    //.vac-toggle-button {
    //  display: none;
    //}
    @media (max-width: 600px) {
      right: 0;
      bottom: 0;
    }
  }

  .full-screen {
    overflow: hidden !important;
    position: fixed;

    &::-webkit-scrollbar {
      display: none;
    }
  }
</style>
