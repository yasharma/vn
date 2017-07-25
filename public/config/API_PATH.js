/********************************************************************
* Global variable and api url
********************************************************************/

window.__API_PATH={};

__API_PATH.jotList = '/api/get_jot';

/*
* Login 
*/

__API_PATH.LOGIN   = '/api/login';


/*
* Register 
*/

__API_PATH.REGISTER  = '/api/register';

/*
* Hotels 
*/
__API_PATH.GET_HOTELS  = '/api/get_hotels';
__API_PATH.ADD_HOTEL   = '/api/add_hotel';

/*
* Jot 
*/

__API_PATH.JOT_TYPES 	   = [{name:'issue',class:'active',icon:'warning'},{name:'message',class:'',icon:'email'},{name:'task',class:'',icon:'format_list_bulleted'},{name:'note',class:'',icon:'email'},{name:'lost & found',class:'',icon:'call_missed'},{name:'meeting room',class:'',icon:'room'},{name:'vending',class:'',icon:'shopping_cart'}]; 

__API_PATH.JOT_PRIORITY   = [{name:'urgent',class:'urgent orange'},{name:'high',class:'high red'},{name:'medium',class:'medium yellow'},{name:'low',class:'low green'}]; 

__API_PATH.CREATE_JOT = '/api/create_jot';
__API_PATH.GET_JOT       = '/api/get_jot';

__API_PATH.delete_hotel = '/api/delete_hotel';

