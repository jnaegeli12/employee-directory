import axios from 'axios';

const API = {
    // Gets all users
    getEmployeeList: function() {
        return axios.get('https://randomuser.me/api/?results=80&nat=us');
    }
    
}
  
export default API;