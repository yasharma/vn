/********************************************************************
* Global variable and api url
********************************************************************/

window.__API_PATH  					=   {};

__API_PATH.jotList 					= '/api/get_jot';
__API_PATH.LOGIN   					= '/api/login';
__API_PATH.REGISTER  				= '/api/register';
__API_PATH.GET_HOTELS  				= '/api/get_hotels';
__API_PATH.ADD_HOTEL  				= '/api/add_hotel';
__API_PATH.CREATE_JOT 				= '/api/create_jot';
__API_PATH.GET_JOT      	 		= '/api/get_jot';
__API_PATH.DELETE_HOTEL 			= '/api/delete_hotel';
__API_PATH.STAFF_SUGGESTION 		= '/api/get_members';
__API_PATH.UPLOAD_FILE  			= '/api/uploadfile';
__API_PATH.UPDATE_JOT  				= '/api/update_jot';
__API_PATH.DELETE_JOT  				= '/api/delete_jot';
__API_PATH.GET_DEPARTMENTS  		= '/api/get_departments';
__API_PATH.FORGET_PASSWORD			= '/api/forgot_password';
__API_PATH.PASSWORD_RESET			= '/api/resetPassword';


__API_PATH.JOT_TYPES = {
							quick:{label:"Quick Jot",id:'quick',src:'assets/images/logo_pic.png',icontype:'image'},
							issue:{label:"Issue",id:'issue',src:'warning',icontype:'icon'},
							task:{label:"task",id:'task',src:'format_list_bulleted',icontype:'icon'},
							note:{label:"Note",id:'note',src:'insert_drive_file',icontype:'icon'},
							lost_found:{label:"Lost & Found",id:'lost_found',src:'local_drink',icontype:'icon'},
							vending_machine:{label:"Vending Machine",id:'vending_machine',src:'vignette',icontype:'icon'},
							meeting_room:{label:"Meeting Room",id:'meeting_room',src:'group',icontype:'icon'}
						};


/*__API_PATH.JOT_TYPES 	   = [{name:'issue',class:'',icon:'warning'},{name:'message',class:'',icon:'email'},{name:'task',class:'',icon:'format_list_bulleted'},{name:'lost & found',class:'',icon:'call_missed'},{name:'meeting room',class:'',icon:'room'},{name:'vending',class:'',icon:'shopping_cart'}];*/ 

__API_PATH.JOT_PRIORITY   = [{name:'urgent',class:'urgent orange'},{name:'high',class:'high red'},{name:'medium',class:'medium yellow'},{name:'low',class:'low green'}]; 


/*__API_PATH.JOT_TAB 	   = [
{name:'Quick Jot',id:'quick',src:'assets/images/logo_pic.png',icontype:'image'},
{name:'Issue',id:'issue',src:'warning',icontype:'icon'},
{name:'Task',id:'task',src:'format_list_bulleted',icontype:'icon'},
{name:'Message',id:'message',src:'insert_drive_file',icontype:'icon'},
{name:'lost & found',id:'lost&found',src:'local_drink',icontype:'icon'},
{name:'Vending Machine',id:'vending_machine',src:'vignette',icontype:'icon'},
{name:'Meeting Room',id:'meeting_room',src:'group',icontype:'icon'}]; */

__API_PATH.DEFAULT_CHECKLIST 	=  [
										{
											name   :"Prepare Room 7 AM @Jon",
											sublist:[{name:"tea1"},{name:"tea2"}]
										},
										{
											name   :"Prepare Room 7 AM @Jon2",
											sublist:[{name:"tea3"},{name:"tea4"}]
										}			
									];




__API_PATH.RECURRING_PATTERN = [
									{
										label 	     :"Daily",
										id    	     :"daily",	
										description  : "Daily Recurring"					
									},
									{
										label        :"Weekly",
										id   		 :"weekly",
										description	 : "Recurring every week" 
									},
									{
										label        :"Monthly",
										id           :"monthly",
										description  : "Recurring every month"
									}			
								]; 


__API_PATH.WEEK_NAME = [
							
							{
								label :"Monday",
								value :'monday',
							},
							{
								label  :"Tuesday",
								value  :'tuesday'
							},
							{
								label  :"Wednesday",
								value  :'wednesday'
							},	
							{
								label  :"Thursday",
								value  :'thursday'
							},
							{
								label  :"Friday",
								value  :'friday'
							},
							{
								label  :"Saturday",
								value  :'saturday'
							},
							{
								label :"Sunday",
								value :'sunday',						
							},		
						];								 
