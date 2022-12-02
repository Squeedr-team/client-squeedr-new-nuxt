const state = () => ({
  rooms: [
    {
      roomId: '1',
      roomName: 'Room 1',
      avatar: 'assets/imgs/people.png',
      unreadCount: 4,
      index: 3,
      lastMessage: {
        _id: 'xyz',
        content: 'Last message received',
        senderId: '1234',
        username: 'John Doe',
        timestamp: '10:20',
        saved: true,
        distributed: false,
        seen: false,
        new: true
      },
      users: [
        {
          _id: '1234',
          username: 'John Doe',
          avatar: 'assets/imgs/doe.png',
          status: {
            state: 'online',
            lastChanged: 'today, 14:30'
          }
        },
        {
          _id: '4321',
          username: 'John Snow',
          avatar: 'assets/imgs/snow.png',
          status: {
            state: 'offline',
            lastChanged: '14 July, 20:00'
          }
        }
      ],
      typingUsers: [4321]
    }
  ],
  chatOpen: false,
  currentRoomData: '1'
});

const getters = {
  isChatOpen: state => state.chatOpen,
  roomList: state => state.rooms,
  currentRoom: state => state.currentRoomData,
};

const mutations = {
  set_rooms(state, payload) {
    state.rooms = payload
  },
  type_user(state, payload) {
    const idx = state.rooms.findIndex(item => item.room_id === payload.room)
    state.rooms = state.rooms.map((item, index) => {
      return {
        ...item,
        typingUsers: index === idx ? [payload.user] : []
      }
    })
  },
  remove_type_user(state, payload) {
    const idx = state.rooms.findIndex(item => item.room_id === payload.room)
    state.rooms[idx].typingUsers = []
  },
  set_current_room(state, payload) {
    state.currentRoomData = '1'
  },
  set_chat_open(state, payload) {
    state.chatOpen = payload
  },
  toggle_chat_open(state, payload) {
    state.chatOpen = !state.chatOpen
  },
}

const actions = {
  async getRooms({commit}) {
    try {
      const res = await this.$axios.$get('/rooms/', {progress: false})
      commit('set_rooms', res.rooms)
    } catch (e) {

    }
  },
  async getRoomName({commit, dispatch}, payload) {
    try {
      const res = await this.$axios.$get('chat/get_room_name/' + payload, {progress: false})
      commit('set_current_room', res.room)
      dispatch('getRooms')
    } catch (e) {

    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions
};
