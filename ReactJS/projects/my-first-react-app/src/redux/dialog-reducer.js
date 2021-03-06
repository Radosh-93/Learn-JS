const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
	usersData: [
		{ id: 1, name: 'Dimych', img: 'https://www.meme-arsenal.com/memes/d7a0ccde363c86b4b25457671e0a052b.jpg' },
		{ id: 2, name: 'Andey', img: 'https://www.meme-arsenal.com/memes/5da8de38994bdba84654fd5f64e9fdc0.jpg' },
		{ id: 3, name: 'Sveta', img: 'https://i.pinimg.com/236x/e9/25/f7/e925f77a990b2c0f74f595a4a921890a.jpg' },
		{ id: 4, name: 'Alex', img: 'https://i.pinimg.com/736x/7e/9e/08/7e9e08555d633b03b254bd819bd9335a.jpg' },
		{ id: 5, name: 'Valery', img: 'https://i.pinimg.com/736x/3b/0d/cb/3b0dcbe0358e163382d99d8fe4440306.jpg' },
		{ id: 6, name: 'Alina', img: 'https://pm1.narvii.com/7022/b27d2a21719f0471e034271f26e54e025a8d2a03r1-530-663v2_uhq.jpg' }
	],
	messagesData: [
		{ id: 1, content: 'hi', classMsg: 'sent' },
		{ id: 2, content: "It's me", classMsg: 'sent' },
		{ id: 3, content: "How are you?", classMsg: 'sent' },
		{ id: 4, content: "Yo", classMsg: 'received' },
		{ id: 5, content: "Fine", classMsg: 'received' },
	],
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			let msg = {id: state.messagesData.length + 1, content: action.newMessage, classMsg: 'sent'};
			return {...state, messagesData: [...state.messagesData, msg]} //return stateCopy
		default:
			return state
	}
}

export const sendMessage = (newMessage) => ({ type: SEND_MESSAGE, newMessage })

export default dialogsReducer