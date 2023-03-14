
    let actionsExport = (Posts = [], action) => {
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...Posts, action.payload];
        case 'UPDATE':
            console.log('this action payload'+action.payload, Posts);
            return Posts.map((post) => (post._id === action.payload._id ?  action.payload  : post));
        case 'UPDATE_REPLY':
            console.log('this action payload'+action.payload._id, action.payload);
            return Posts.map((post) => (post._id === action.payload._id ?  action.payload  : post));   
        case 'DELETE':
            return Posts.filter((p) => (p._id !== action.payload));        
        default:
            return Posts;       
    }
}
export default actionsExport ;