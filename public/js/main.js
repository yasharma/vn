// 'use strict';


var app = angular.module('hoteljotApp',[
			'ngAnimate',
			'ngMaterial',
			'ngRoute',
			'LocalStorageModule',
			'ngMdIcons'	,
			'ngFileUpload',
			'angularjs-datetime-picker',	
			'colorpicker.module',
			'ui.bootstrap',	
			'ngSanitize',
			])

.config(['localStorageServiceProvider',
	function (localStorageServiceProvider) {
	  	localStorageServiceProvider
	    .setPrefix('hoteljotApp');
	}
]);

app.run(['$log',function($log){
	$log.info("Application is running");
}]);
/********************************************************************
* Global variable and api url
********************************************************************/

window.__API_PATH                       =   {};

__API_PATH.jotList                      = '/api/get_jot';
__API_PATH.UPDATE_JOT                   = '/api/update_jot';
__API_PATH.DELETE_JOT                   = '/api/delete_jot';
__API_PATH.CREATE_JOT                   = '/api/create_jot';
__API_PATH.GET_JOT                      = '/api/get_jot';
__API_PATH.ADD_COMMENT                  = '/api/add_jotactivity';
__API_PATH.GET_COMMENT                  = '/api/get_jotactivity';

__API_PATH.LOGIN                        = '/api/login';
__API_PATH.REGISTER                     = '/api/register';

__API_PATH.GET_HOTELS                   = '/api/get_hotels';
__API_PATH.GET_HOTEL_DETAIL             = '/api/hotel_detail';
__API_PATH.ADD_HOTEL                    = '/api/add_hotel';
__API_PATH.DELETE_HOTEL                 = '/api/delete_hotel';
__API_PATH.UPDATE_HOTEL                 = '/api/update_hotel';


__API_PATH.STAFF_SUGGESTION             = '/api/get_members';



__API_PATH.JOT_COUNT                    = '/api/hotel_notifications';
//__API_PATH.GET_JOT_LIST                   = '/api/get_jot';

__API_PATH.GET_DEPARTMENTS              = '/api/get_departments';
__API_PATH.ADD_DEPARTMENT               = '/api/add_department';
__API_PATH.UPDATE_DEPARTMENT            = '/api/update_department';
__API_PATH.DELETE_DEPARTMENT            = '/api/delete_department';
__API_PATH.CONFIGURE_DEPARTMENTS        = '/api/configure_departments';

__API_PATH.FORGET_PASSWORD              = '/api/forgot_password';
__API_PATH.PASSWORD_RESET               = '/api/resetPassword';

__API_PATH.UPLOAD_FILE                  = '/api/uploadfiledata';


__API_PATH.LOST_FOUND                   = '/api/add_lost_found';
__API_PATH.GET_LOST_FOUND               = '/api/get_lost_found';
__API_PATH.DELETE_LOST_FOUND            = '/api/delete_lost_found';
__API_PATH.UPDATE_LOST_FOUND            = '/api/update_lost_found';

__API_PATH.GET_ITEMS                    = '/api/get_item';
__API_PATH.UPDATE_ITEM                  = '/api/update_item';
__API_PATH.ADD_ITEM                     = '/api/add_item';
__API_PATH.DELETE_ITEM                  = '/api/delete_item';
__API_PATH.PURCHASE                     = '/api/add_to_cart';

__API_PATH.ADD_INVENTORY_CATEGORY       = '/api/add_inventory_category';
__API_PATH.UPDATE_INVENTORY_CATEGORY    = '/api/update_inventory_category';
__API_PATH.DELETE_INVENTORY_CATEGORY    = '/api/delete_inventory_category';
__API_PATH.GET_INVENTORY_CATEGORY       = '/api/get_inventory_category';

__API_PATH.ADD_MEMBER                   = '/api/add_member';
__API_PATH.UPDATE_MEMBER                = '/api/update_member';
__API_PATH.DELETE_MEMBER                = '/api/delete_member';


__API_PATH.ADD_HOTELSHIFT               = '/api/add_hotelshift';
__API_PATH.GET_HOTELSHIFTS              = '/api/get_hotelshifts';
__API_PATH.DELETE_HOTELSHIFTS           = '/api/delete_hotelshift';
__API_PATH.UPDATE_HOTELSHIFTS           = '/api/update_hotelshift';

__API_PATH.MEMBER_SCHEDULE_DATA         = '/api/member_schedule_data';
__API_PATH.ADD_MEMBER_SCHEDULE          = '/api/add_member_schedule';



__API_PATH.ADD_CONTACT                  = '/api/add_contact';
__API_PATH.GET_CONTACTS                 = '/api/get_contact';
__API_PATH.DELETE_CONTACT               = '/api/delete_contact';
__API_PATH.UPDATE_CONTACT               = '/api/update_contact';


__API_PATH.ADD_DOCUMENT                 = '/api/add_document';
__API_PATH.UPDATE_DOCUMENT              = '/api/update_document';
__API_PATH.DELETE_DOCUMENT              = '/api/delete_document';
__API_PATH.GET_DOCUMENT                 = '/api/get_document';
__API_PATH.MOVE_DOCUMENT                = '/api/move_document';
__API_PATH.CONFIGURE_MEMBERS            = '/api/configure_members';

__API_PATH.GET_HOTEL_STATUS             = '/api/getHotelStatus';


__API_PATH.HEADER_MENU =  [
    {label:"Home", id:"home", href:"/"},
    {label:"ABOUT", id:"about-us", href:"#" ,class:"active"},
    {label:"HOW IT WORKS", id:"work", href:'#',class:""},
    {label:"FEATURES", id:"feature", href:'#',class:""},
    {label:"TESTIMONALS", id:"testimonial", href:'#',class:""}
];

/*
__API_PATH.JOT_TYPES = {
                            quick:{label:"Quick Jot",id:'quick',src:'assets/images/logo_pic.png',icontype:'image',directory:'jot'},
                            issue:{label:"Issue",id:'issue',src:'warning',icontype:'icon',directory:'jot'},
                            task:{label:"task",id:'task',src:'task_icon.png',icontype:'icon',directory:'jot'},
                            note:{label:"Note",id:'note',src:'insert_drive_file',icontype:'icon',directory:'jot'},
                            lost_found:{label:"Lost & Found",id:'lost_found',src:'business',icontype:'icon',directory:'lost_found'},
                            vending_machine:{label:"Vending Machine",id:'vending_machine',src:'local_drink',icontype:'icon',directory:'vending_machine'},
                            meeting_room:{label:"Meeting Room",id:'meeting_room',src:'group',icontype:'icon',directory:'jot'}
                        };*/



__API_PATH.JOT_TYPES  = {
                            quick:{label:"Quick Jot",id:'quick',data:'assets/images/jot_icon.png',icontype:'image',directory:'jot',bgcolor:"#3953a8",class:"cirsularhide"},
                            
                            issue:{label:"Issue",id:'issue',data:'assets/images/issue_icon.png',icontype:'image',directory:'jot',bgcolor:"#53ad78",class:"onelink"},
                           
                            task:{label:"Task",id:'task',data:'assets/images/task_icon.png',icontype:'image',directory:'jot',bgcolor:"#aba0ef",class:"twolink"},
                            
                            note:{label:"Note",id:'note',data:'assets/images/note_icon.png',icontype:'image',directory:'jot',bgcolor:"#71adf7",class:"threelink"},

                            messages:{label:"Messages",id:'messages',data:'assets/images/message_icon.png',icontype:'image',directory:'jot',bgcolor:"#198cc6",class:"fourlink"},
                            
                            lost_found:{label:"Lost & Found",id:'lost_found',data:'assets/images/lost_icon.png',icontype:'image',directory:'lost_found',bgcolor:"#e37f4b",class:"fivelink"},
                            
                            vending_machine:{label:"Vending Machine",id:'vending_machine',data:'assets/images/vending_icon.png',icontype:'image',directory:'vending_machine',bgcolor:"#e37f4b",class:"sixlink"},

                            meeting_room:{label:"Meeting Room",id:'meeting_room',data:'assets/images/metting_icon.png',icontype:'image',directory:'jot',bgcolor:"#f8553a",class:"sevenlink"}
                        };                        

 

__API_PATH.JOT_PRIORITY   = [{name:'urgent',class:'urgent orange'},{name:'high',class:'high red'},{name:'medium',class:'medium yellow'},{name:'low',class:'low green'}]; 



__API_PATH.DEFAULT_CHECKLIST    =  [
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
                                        label        :"Daily",
                                        id           :"daily",  
                                        description  : "Daily Recurring"                    
                                    },
                                    {
                                        label        :"Weekly",
                                        id           :"weekly",
                                        description  : "Recurring every week" 
                                    },
                                    {
                                        label        :"Monthly",
                                        id           :"monthly",
                                        description  : "Recurring every month"
                                    },
                                    {
                                        label        :"Yearly",
                                        id           :"yearly",
                                        description  : "Recurring every year"
                                    }

                                ]; 


__API_PATH.MONTH = [
                                {
                                    label        : "January",
                                    value        : "1"          
                                },
                                {
                                    label        : "February",
                                    value        : "2"          
                                },
                                {
                                    label        : "March",
                                    value        : "3"          
                                },
                                {
                                    label        : "April",
                                    value        : "4"          
                                },
                                {
                                    label        : "May",
                                    value        : "5"          
                                },
                                {
                                    label        : "June",
                                    value        : "6"          
                                },
                                {
                                    label        : "July",
                                    value        : "7"          
                                },
                                {
                                    label        : "August",
                                    value        : "8"          
                                },
                                {
                                    label        : "September",
                                    value        : "9"          
                                },
                                {
                                    label        : "October",
                                    value        : "10"         
                                },
                                {
                                    label        : "Novemmber",
                                    value        : "11"         
                                },
                                {
                                    label        : "December",
                                    value        : "12"         
                                },

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

__API_PATH.POSITION = ['Executive Assistant','General Manager','Hotel Manager','Operations Director','Operations Manager','Event Planner','Front Desk Clerk','Housekeeper'];

__API_PATH.CURRENCY_LIST  = {
    "USD": {
        "symbol": "$",
        "name": "US Dollar",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "USD",
        "name_plural": "US dollars"
    },
    "CAD": {
        "symbol": "CA$",
        "name": "Canadian Dollar",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "CAD",
        "name_plural": "Canadian dollars"
    },
    "EUR": {
        "symbol": "€",
        "name": "Euro",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "EUR",
        "name_plural": "euros"
    },
    "AED": {
        "symbol": "AED",
        "name": "United Arab Emirates Dirham",
            "decimal_digits": 2,
        "rounding": 0,
        "code": "AED",
        "name_plural": "UAE dirhams"
    },
    "AFN": {
        "symbol": "Af",
        "name": "Afghan Afghani",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "AFN",
        "name_plural": "Afghan Afghanis"
    },
    "ALL": {
        "symbol": "ALL",
        "name": "Albanian Lek",
          "decimal_digits": 0,
        "rounding": 0,
        "code": "ALL",
        "name_plural": "Albanian lekë"
    },
    "AMD": {
        "symbol": "AMD",
        "name": "Armenian Dram",
          "decimal_digits": 0,
        "rounding": 0,
        "code": "AMD",
        "name_plural": "Armenian drams"
    },
    "ARS": {
        "symbol": "AR$",
        "name": "Argentine Peso",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "ARS",
        "name_plural": "Argentine pesos"
    },
    "AUD": {
        "symbol": "AU$",
        "name": "Australian Dollar",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "AUD",
        "name_plural": "Australian dollars"
    },
    "AZN": {
        "symbol": "man.",
        "name": "Azerbaijani Manat",
           "decimal_digits": 2,
        "rounding": 0,
        "code": "AZN",
        "name_plural": "Azerbaijani manats"
    },
    "BAM": {
        "symbol": "KM",
        "name": "Bosnia-Herzegovina Convertible Mark",
         "decimal_digits": 2,
        "rounding": 0,
        "code": "BAM",
        "name_plural": "Bosnia-Herzegovina convertible marks"
    },
    "BDT": {
        "symbol": "Tk",
        "name": "Bangladeshi Taka",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "BDT",
        "name_plural": "Bangladeshi takas"
    },
    "BGN": {
        "symbol": "BGN",
        "name": "Bulgarian Lev",
          "decimal_digits": 2,
        "rounding": 0,
        "code": "BGN",
        "name_plural": "Bulgarian leva"
    },
    "BHD": {
        "symbol": "BD",
        "name": "Bahraini Dinar",
            "decimal_digits": 3,
        "rounding": 0,
        "code": "BHD",
        "name_plural": "Bahraini dinars"
    },
    "BIF": {
        "symbol": "FBu",
        "name": "Burundian Franc",
          "decimal_digits": 0,
        "rounding": 0,
        "code": "BIF",
        "name_plural": "Burundian francs"
    },
    "BND": {
        "symbol": "BN$",
        "name": "Brunei Dollar",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "BND",
        "name_plural": "Brunei dollars"
    },
    "BOB": {
        "symbol": "Bs",
        "name": "Bolivian Boliviano",
         "decimal_digits": 2,
        "rounding": 0,
        "code": "BOB",
        "name_plural": "Bolivian bolivianos"
    },
    "BRL": {
        "symbol": "R$",
        "name": "Brazilian Real",
         "decimal_digits": 2,
        "rounding": 0,
        "code": "BRL",
        "name_plural": "Brazilian reals"
    },
    "BWP": {
        "symbol": "BWP",
        "name": "Botswanan Pula",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "BWP",
        "name_plural": "Botswanan pulas"
    },
    "BYR": {
        "symbol": "BYR",
        "name": "Belarusian Ruble",
          "decimal_digits": 0,
        "rounding": 0,
        "code": "BYR",
        "name_plural": "Belarusian rubles"
    },
    "BZD": {
        "symbol": "BZ$",
        "name": "Belize Dollar",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "BZD",
        "name_plural": "Belize dollars"
    },
    "CDF": {
        "symbol": "CDF",
        "name": "Congolese Franc",
           "decimal_digits": 2,
        "rounding": 0,
        "code": "CDF",
        "name_plural": "Congolese francs"
    },
    "CHF": {
        "symbol": "CHF",
        "name": "Swiss Franc",
          "decimal_digits": 2,
        "rounding": 0.05,
        "code": "CHF",
        "name_plural": "Swiss francs"
    },
    "CLP": {
        "symbol": "CL$",
        "name": "Chilean Peso",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "CLP",
        "name_plural": "Chilean pesos"
    },
    "CNY": {
        "symbol": "CN¥",
        "name": "Chinese Yuan",
          "decimal_digits": 2,
        "rounding": 0,
        "code": "CNY",
        "name_plural": "Chinese yuan"
    },
    "COP": {
        "symbol": "CO$",
        "name": "Colombian Peso",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "COP",
        "name_plural": "Colombian pesos"
    },
    "CRC": {
        "symbol": "₡",
        "name": "Costa Rican Colón",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "CRC",
        "name_plural": "Costa Rican colóns"
    },
    "CVE": {
        "symbol": "CV$",
        "name": "Cape Verdean Escudo",
          "decimal_digits": 2,
        "rounding": 0,
        "code": "CVE",
        "name_plural": "Cape Verdean escudos"
    },
    "CZK": {
        "symbol": "Kč",
        "name": "Czech Republic Koruna",
         "decimal_digits": 2,
        "rounding": 0,
        "code": "CZK",
        "name_plural": "Czech Republic korunas"
    },
    "DJF": {
        "symbol": "Fdj",
        "name": "Djiboutian Franc",
          "decimal_digits": 0,
        "rounding": 0,
        "code": "DJF",
        "name_plural": "Djiboutian francs"
    },
    "DKK": {
        "symbol": "Dkr",
        "name": "Danish Krone",
         "decimal_digits": 2,
        "rounding": 0,
        "code": "DKK",
        "name_plural": "Danish kroner"
    },
    "DOP": {
        "symbol": "RD$",
        "name": "Dominican Peso",
          "decimal_digits": 2,
        "rounding": 0,
        "code": "DOP",
        "name_plural": "Dominican pesos"
    },
    "DZD": {
        "symbol": "DA",
        "name": "Algerian Dinar",
            "decimal_digits": 2,
        "rounding": 0,
        "code": "DZD",
        "name_plural": "Algerian dinars"
    },
    "EEK": {
        "symbol": "Ekr",
        "name": "Estonian Kroon",
         "decimal_digits": 2,
        "rounding": 0,
        "code": "EEK",
        "name_plural": "Estonian kroons"
    },
    "EGP": {
        "symbol": "EGP",
        "name": "Egyptian Pound",
            "decimal_digits": 2,
        "rounding": 0,
        "code": "EGP",
        "name_plural": "Egyptian pounds"
    },
    "ERN": {
        "symbol": "Nfk",
        "name": "Eritrean Nakfa",
          "decimal_digits": 2,
        "rounding": 0,
        "code": "ERN",
        "name_plural": "Eritrean nakfas"
    },
    "ETB": {
        "symbol": "Br",
        "name": "Ethiopian Birr",
         "decimal_digits": 2,
        "rounding": 0,
        "code": "ETB",
        "name_plural": "Ethiopian birrs"
    },
    "GBP": {
        "symbol": "£",
        "name": "British Pound Sterling",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "GBP",
        "name_plural": "British pounds sterling"
    },
    "GEL": {
        "symbol": "GEL",
        "name": "Georgian Lari",
          "decimal_digits": 2,
        "rounding": 0,
        "code": "GEL",
        "name_plural": "Georgian laris"
    },
    "GHS": {
        "symbol": "GH₵",
        "name": "Ghanaian Cedi",
          "decimal_digits": 2,
        "rounding": 0,
        "code": "GHS",
        "name_plural": "Ghanaian cedis"
    },
    "GNF": {
        "symbol": "FG",
        "name": "Guinean Franc",
         "decimal_digits": 0,
        "rounding": 0,
        "code": "GNF",
        "name_plural": "Guinean francs"
    },
    "GTQ": {
        "symbol": "GTQ",
        "name": "Guatemalan Quetzal",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "GTQ",
        "name_plural": "Guatemalan quetzals"
    },
    "HKD": {
        "symbol": "HK$",
        "name": "Hong Kong Dollar",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "HKD",
        "name_plural": "Hong Kong dollars"
    },
    "HNL": {
        "symbol": "HNL",
        "name": "Honduran Lempira",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "HNL",
        "name_plural": "Honduran lempiras"
    },
    "HRK": {
        "symbol": "kn",
        "name": "Croatian Kuna",
         "decimal_digits": 2,
        "rounding": 0,
        "code": "HRK",
        "name_plural": "Croatian kunas"
    },
    "HUF": {
        "symbol": "Ft",
        "name": "Hungarian Forint",
         "decimal_digits": 0,
        "rounding": 0,
        "code": "HUF",
        "name_plural": "Hungarian forints"
    },
    "IDR": {
        "symbol": "Rp",
        "name": "Indonesian Rupiah",
         "decimal_digits": 0,
        "rounding": 0,
        "code": "IDR",
        "name_plural": "Indonesian rupiahs"
    },
    "ILS": {
        "symbol": "₪",
        "name": "Israeli New Sheqel",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "ILS",
        "name_plural": "Israeli new sheqels"
    },
    "INR": {
        "symbol": "Rs",
        "name": "Indian Rupee",
          "decimal_digits": 2,
        "rounding": 0,
        "code": "INR",
        "name_plural": "Indian rupees"
    },
    "IQD": {
        "symbol": "IQD",
        "name": "Iraqi Dinar",
            "decimal_digits": 0,
        "rounding": 0,
        "code": "IQD",
        "name_plural": "Iraqi dinars"
    },
    "IRR": {
        "symbol": "IRR",
        "name": "Iranian Rial",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "IRR",
        "name_plural": "Iranian rials"
    },
    "ISK": {
        "symbol": "Ikr",
        "name": "Icelandic Króna",
         "decimal_digits": 0,
        "rounding": 0,
        "code": "ISK",
        "name_plural": "Icelandic krónur"
    },
    "JMD": {
        "symbol": "J$",
        "name": "Jamaican Dollar",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "JMD",
        "name_plural": "Jamaican dollars"
    },
    "JOD": {
        "symbol": "JD",
        "name": "Jordanian Dinar",
            "decimal_digits": 3,
        "rounding": 0,
        "code": "JOD",
        "name_plural": "Jordanian dinars"
    },
    "JPY": {
        "symbol": "¥",
        "name": "Japanese Yen",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "JPY",
        "name_plural": "Japanese yen"
    },
    "KES": {
        "symbol": "Ksh",
        "name": "Kenyan Shilling",
          "decimal_digits": 2,
        "rounding": 0,
        "code": "KES",
        "name_plural": "Kenyan shillings"
    },
    "KHR": {
        "symbol": "KHR",
        "name": "Cambodian Riel",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "KHR",
        "name_plural": "Cambodian riels"
    },
    "KMF": {
        "symbol": "CF",
        "name": "Comorian Franc",
         "decimal_digits": 0,
        "rounding": 0,
        "code": "KMF",
        "name_plural": "Comorian francs"
    },
    "KRW": {
        "symbol": "₩",
        "name": "South Korean Won",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "KRW",
        "name_plural": "South Korean won"
    },
    "KWD": {
        "symbol": "KD",
        "name": "Kuwaiti Dinar",
            "decimal_digits": 3,
        "rounding": 0,
        "code": "KWD",
        "name_plural": "Kuwaiti dinars"
    },
    "KZT": {
        "symbol": "KZT",
        "name": "Kazakhstani Tenge",
           "decimal_digits": 2,
        "rounding": 0,
        "code": "KZT",
        "name_plural": "Kazakhstani tenges"
    },
    "LBP": {
        "symbol": "LB£",
        "name": "Lebanese Pound",
            "decimal_digits": 0,
        "rounding": 0,
        "code": "LBP",
        "name_plural": "Lebanese pounds"
    },
    "LKR": {
        "symbol": "SLRs",
        "name": "Sri Lankan Rupee",
            "decimal_digits": 2,
        "rounding": 0,
        "code": "LKR",
        "name_plural": "Sri Lankan rupees"
    },
    "LTL": {
        "symbol": "Lt",
        "name": "Lithuanian Litas",
         "decimal_digits": 2,
        "rounding": 0,
        "code": "LTL",
        "name_plural": "Lithuanian litai"
    },
    "LVL": {
        "symbol": "Ls",
        "name": "Latvian Lats",
         "decimal_digits": 2,
        "rounding": 0,
        "code": "LVL",
        "name_plural": "Latvian lati"
    },
    "LYD": {
        "symbol": "LD",
        "name": "Libyan Dinar",
            "decimal_digits": 3,
        "rounding": 0,
        "code": "LYD",
        "name_plural": "Libyan dinars"
    },
    "MAD": {
        "symbol": "MAD",
        "name": "Moroccan Dirham",
            "decimal_digits": 2,
        "rounding": 0,
        "code": "MAD",
        "name_plural": "Moroccan dirhams"
    },
    "MDL": {
        "symbol": "MDL",
        "name": "Moldovan Leu",
          "decimal_digits": 2,
        "rounding": 0,
        "code": "MDL",
        "name_plural": "Moldovan lei"
    },
    "MGA": {
        "symbol": "MGA",
        "name": "Malagasy Ariary",
          "decimal_digits": 0,
        "rounding": 0,
        "code": "MGA",
        "name_plural": "Malagasy Ariaries"
    },
    "MKD": {
        "symbol": "MKD",
        "name": "Macedonian Denar",
          "decimal_digits": 2,
        "rounding": 0,
        "code": "MKD",
        "name_plural": "Macedonian denari"
    },
    "MMK": {
        "symbol": "MMK",
        "name": "Myanma Kyat",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "MMK",
        "name_plural": "Myanma kyats"
    },
    "MOP": {
        "symbol": "MOP$",
        "name": "Macanese Pataca",
           "decimal_digits": 2,
        "rounding": 0,
        "code": "MOP",
        "name_plural": "Macanese patacas"
    },
    "MUR": {
        "symbol": "MURs",
        "name": "Mauritian Rupee",
           "decimal_digits": 0,
        "rounding": 0,
        "code": "MUR",
        "name_plural": "Mauritian rupees"
    },
    "MXN": {
        "symbol": "MX$",
        "name": "Mexican Peso",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "MXN",
        "name_plural": "Mexican pesos"
    },
    "MYR": {
        "symbol": "RM",
        "name": "Malaysian Ringgit",
         "decimal_digits": 2,
        "rounding": 0,
        "code": "MYR",
        "name_plural": "Malaysian ringgits"
    },
    "MZN": {
        "symbol": "MTn",
        "name": "Mozambican Metical",
          "decimal_digits": 2,
        "rounding": 0,
        "code": "MZN",
        "name_plural": "Mozambican meticals"
    },
    "NAD": {
        "symbol": "N$",
        "name": "Namibian Dollar",
         "decimal_digits": 2,
        "rounding": 0,
        "code": "NAD",
        "name_plural": "Namibian dollars"
    },
    "NGN": {
        "symbol": "₦",
        "name": "Nigerian Naira",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "NGN",
        "name_plural": "Nigerian nairas"
    },
    "NIO": {
        "symbol": "C$",
        "name": "Nicaraguan Córdoba",
         "decimal_digits": 2,
        "rounding": 0,
        "code": "NIO",
        "name_plural": "Nicaraguan córdobas"
    },
    "NOK": {
        "symbol": "Nkr",
        "name": "Norwegian Krone",
         "decimal_digits": 2,
        "rounding": 0,
        "code": "NOK",
        "name_plural": "Norwegian kroner"
    },
    "NPR": {
        "symbol": "NPRs",
        "name": "Nepalese Rupee",
           "decimal_digits": 2,
        "rounding": 0,
        "code": "NPR",
        "name_plural": "Nepalese rupees"
    },
    "NZD": {
        "symbol": "NZ$",
        "name": "New Zealand Dollar",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "NZD",
        "name_plural": "New Zealand dollars"
    },
    "OMR": {
        "symbol": "OMR",
        "name": "Omani Rial",
            "decimal_digits": 3,
        "rounding": 0,
        "code": "OMR",
        "name_plural": "Omani rials"
    },
    "PAB": {
        "symbol": "B/.",
        "name": "Panamanian Balboa",
          "decimal_digits": 2,
        "rounding": 0,
        "code": "PAB",
        "name_plural": "Panamanian balboas"
    },
    "PEN": {
        "symbol": "S/.",
        "name": "Peruvian Nuevo Sol",
          "decimal_digits": 2,
        "rounding": 0,
        "code": "PEN",
        "name_plural": "Peruvian nuevos soles"
    },
    "PHP": {
        "symbol": "₱",
        "name": "Philippine Peso",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "PHP",
        "name_plural": "Philippine pesos"
    },
    "PKR": {
        "symbol": "PKRs",
        "name": "Pakistani Rupee",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "PKR",
        "name_plural": "Pakistani rupees"
    },
    "PLN": {
        "symbol": "zł",
        "name": "Polish Zloty",
         "decimal_digits": 2,
        "rounding": 0,
        "code": "PLN",
        "name_plural": "Polish zlotys"
    },
    "PYG": {
        "symbol": "₲",
        "name": "Paraguayan Guarani",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "PYG",
        "name_plural": "Paraguayan guaranis"
    },
    "QAR": {
        "symbol": "QR",
        "name": "Qatari Rial",
            "decimal_digits": 2,
        "rounding": 0,
        "code": "QAR",
        "name_plural": "Qatari rials"
    },
    "RON": {
        "symbol": "RON",
        "name": "Romanian Leu",
          "decimal_digits": 2,
        "rounding": 0,
        "code": "RON",
        "name_plural": "Romanian lei"
    },
    "RSD": {
        "symbol": "din.",
        "name": "Serbian Dinar",
           "decimal_digits": 0,
        "rounding": 0,
        "code": "RSD",
        "name_plural": "Serbian dinars"
    },
    "RUB": {
        "symbol": "RUB",
        "name": "Russian Ruble",
           "decimal_digits": 2,
        "rounding": 0,
        "code": "RUB",
        "name_plural": "Russian rubles"
    },
    "RWF": {
        "symbol": "RWF",
        "name": "Rwandan Franc",
         "decimal_digits": 0,
        "rounding": 0,
        "code": "RWF",
        "name_plural": "Rwandan francs"
    },
    "SAR": {
        "symbol": "SR",
        "name": "Saudi Riyal",
            "decimal_digits": 2,
        "rounding": 0,
        "code": "SAR",
        "name_plural": "Saudi riyals"
    },
    "SDG": {
        "symbol": "SDG",
        "name": "Sudanese Pound",
          "decimal_digits": 2,
        "rounding": 0,
        "code": "SDG",
        "name_plural": "Sudanese pounds"
    },
    "SEK": {
        "symbol": "Skr",
        "name": "Swedish Krona",
         "decimal_digits": 2,
        "rounding": 0,
        "code": "SEK",
        "name_plural": "Swedish kronor"
    },
    "SGD": {
        "symbol": "S$",
        "name": "Singapore Dollar",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "SGD",
        "name_plural": "Singapore dollars"
    },
    "SOS": {
        "symbol": "Ssh",
        "name": "Somali Shilling",
          "decimal_digits": 0,
        "rounding": 0,
        "code": "SOS",
        "name_plural": "Somali shillings"
    },
    "SYP": {
        "symbol": "SY£",
        "name": "Syrian Pound",
            "decimal_digits": 0,
        "rounding": 0,
        "code": "SYP",
        "name_plural": "Syrian pounds"
    },
    "THB": {
        "symbol": "฿",
        "name": "Thai Baht",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "THB",
        "name_plural": "Thai baht"
    },
    "TND": {
        "symbol": "DT",
        "name": "Tunisian Dinar",
            "decimal_digits": 3,
        "rounding": 0,
        "code": "TND",
        "name_plural": "Tunisian dinars"
    },
    "TOP": {
        "symbol": "T$",
        "name": "Tongan Paʻanga",
         "decimal_digits": 2,
        "rounding": 0,
        "code": "TOP",
        "name_plural": "Tongan paʻanga"
    },
    "TRY": {
        "symbol": "TL",
        "name": "Turkish Lira",
         "decimal_digits": 2,
        "rounding": 0,
        "code": "TRY",
        "name_plural": "Turkish Lira"
    },
    "TTD": {
        "symbol": "TT$",
        "name": "Trinidad and Tobago Dollar",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "TTD",
        "name_plural": "Trinidad and Tobago dollars"
    },
    "TWD": {
        "symbol": "NT$",
        "name": "New Taiwan Dollar",
          "decimal_digits": 2,
        "rounding": 0,
        "code": "TWD",
        "name_plural": "New Taiwan dollars"
    },
    "TZS": {
        "symbol": "TSh",
        "name": "Tanzanian Shilling",
          "decimal_digits": 0,
        "rounding": 0,
        "code": "TZS",
        "name_plural": "Tanzanian shillings"
    },
    "UAH": {
        "symbol": "₴",
        "name": "Ukrainian Hryvnia",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "UAH",
        "name_plural": "Ukrainian hryvnias"
    },
    "UGX": {
        "symbol": "USh",
        "name": "Ugandan Shilling",
          "decimal_digits": 0,
        "rounding": 0,
        "code": "UGX",
        "name_plural": "Ugandan shillings"
    },
    "UYU": {
        "symbol": "$U",
        "name": "Uruguayan Peso",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "UYU",
        "name_plural": "Uruguayan pesos"
    },
    "UZS": {
        "symbol": "UZS",
        "name": "Uzbekistan Som",
          "decimal_digits": 0,
        "rounding": 0,
        "code": "UZS",
        "name_plural": "Uzbekistan som"
    },
    "VEF": {
        "symbol": "Bs.F.",
        "name": "Venezuelan Bolívar",
            "decimal_digits": 2,
        "rounding": 0,
        "code": "VEF",
        "name_plural": "Venezuelan bolívars"
    },
    "VND": {
        "symbol": "₫",
        "name": "Vietnamese Dong",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "VND",
        "name_plural": "Vietnamese dong"
    },
    "XAF": {
        "symbol": "FCFA",
        "name": "CFA Franc BEAC",
           "decimal_digits": 0,
        "rounding": 0,
        "code": "XAF",
        "name_plural": "CFA francs BEAC"
    },
    "XOF": {
        "symbol": "CFA",
        "name": "CFA Franc BCEAO",
          "decimal_digits": 0,
        "rounding": 0,
        "code": "XOF",
        "name_plural": "CFA francs BCEAO"
    },
    "YER": {
        "symbol": "YR",
        "name": "Yemeni Rial",
            "decimal_digits": 0,
        "rounding": 0,
        "code": "YER",
        "name_plural": "Yemeni rials"
    },
    "ZAR": {
        "symbol": "R",
        "name": "South African Rand",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "ZAR",
        "name_plural": "South African rand"
    },
    "ZMK": {
        "symbol": "ZK",
        "name": "Zambian Kwacha",
         "decimal_digits": 0,
        "rounding": 0,
        "code": "ZMK",
        "name_plural": "Zambian kwachas"
    }
};




__API_PATH.COLOR_CODE = {
              "antiquewhite": "#faebd7",             
              "beige": "#f5f5dc",
              "bisque": "#ffe4c4",
              "blanchedalmond": "#ffebcd",
              "blue": "#0000ff",
              "blueviolet": "#8a2be2",
              "brown": "#a52a2a",
              "burlywood": "#deb887",
              "cadetblue": "#5f9ea0",
              "chartreuse": "#7fff00",
              "chocolate": "#d2691e",
              "coral": "#ff7f50",
              "cornflowerblue": "#6495ed",
              "cornsilk": "#fff8dc",
              "crimson": "#dc143c",
              "cyan": "#00ffff",
           
              "darkcyan": "#008b8b",
              "darkgoldenrod": "#b8860b",
              "darkgray": "#a9a9a9",
              
              "darkgrey": "#a9a9a9",
              "darkkhaki": "#bdb76b",
              "darkmagenta": "#8b008b",           
              "darkorange": "#ff8c00",
              "darkorchid": "#9932cc",              
              "darksalmon": "#e9967a",
              "darkseagreen": "#8fbc8f",
                          
              "darkturquoise": "#00ced1",
              "darkviolet": "#9400d3",
              "deeppink": "#ff1493",
              "deepskyblue": "#00bfff", 
              "dodgerblue": "#1e90ff",
              "firebrick": "#b22222",
              "floralwhite": "#fffaf0",
              "forestgreen": "#228b22",
              "fuchsia": "#ff00ff",
              "gainsboro": "#dcdcdc",
              "ghostwhite": "#f8f8ff",
              "gold": "#ffd700",
              "goldenrod": "#daa520",                           
              "greenyellow": "#adff2f",
              "grey": "#808080",
              "honeydew": "#f0fff0",
              "hotpink": "#ff69b4",
              "indianred": "#cd5c5c",
              "ivory": "#fffff0",
              "khaki": "#f0e68c",
              "lavender": "#e6e6fa",
              "lavenderblush": "#fff0f5",
              "lawngreen": "#7cfc00",
              "lemonchiffon": "#fffacd",
              "lightblue": "#add8e6",
              "lightcoral": "#f08080",
              "lightcyan": "#e0ffff",
              "lightgoldenrodyellow": "#fafad2",
              "lightgray": "#d3d3d3",
              "lightgreen": "#90ee90",
              "lightgrey": "#d3d3d3",
              "lightpink": "#ffb6c1",
              "lightsalmon": "#ffa07a",
              "lightseagreen": "#20b2aa",
              "lightskyblue": "#87cefa",
            
             
              "lightsteelblue": "#b0c4de",
              "lightyellow": "#ffffe0",
              "lime": "#00ff00",
              "limegreen": "#32cd32",
              "linen": "#faf0e6",
              "magenta": "#ff00ff",             
              "mediumaquamarine": "#66cdaa",
              "mediumorchid": "#ba55d3",
              "mediumpurple": "#9370db",
              "mediumseagreen": "#3cb371",
              "mediumslateblue": "#7b68ee",
              "mediumspringgreen": "#00fa9a",
              "mediumturquoise": "#48d1cc",
              "mediumvioletred": "#c71585",
              "mintcream": "#f5fffa",
              "mistyrose": "#ffe4e1",
              "moccasin": "#ffe4b5",
              "navajowhite": "#ffdead",
              "oldlace": "#fdf5e6",
              "olive": "#808000",
              "olivedrab": "#6b8e23",
              "orange": "#ffa500",
              "orangered": "#ff4500",
              "orchid": "#da70d6",
              "palegoldenrod": "#eee8aa",
              "palegreen": "#98fb98",
              "paleturquoise": "#afeeee",
              "palevioletred": "#db7093",
              "papayawhip": "#ffefd5",
              "peachpuff": "#ffdab9",
              "peru": "#cd853f",
              "pink": "#ffc0cb",
              "plum": "#dda0dd",
              "powderblue": "#b0e0e6",                            
              "red": "#ff0000",
              "rosybrown": "#bc8f8f",
              "royalblue": "#4169e1",
             
              "salmon": "#fa8072",
              "sandybrown": "#f4a460",
              "seagreen": "#2e8b57",
              "seashell": "#fff5ee",
     
              "silver": "#c0c0c0",
              "skyblue": "#87ceeb",
              "slateblue": "#6a5acd", 
              "snow": "#fffafa",
              "springgreen": "#00ff7f",
              "steelblue": "#4682b4",
              "tan": "#d2b48c",
              "teal": "#008080",
              "thistle": "#d8bfd8",
              "tomato": "#ff6347",
              "turquoise": "#40e0d0",
              "violet": "#ee82ee",
              "wheat": "#f5deb3",
              "white": "#ffffff",
              "whitesmoke": "#f5f5f5",
              "yellow": "#ffff00",
              "yellowgreen": "#9acd32"
            };


__API_PATH.COUNTRY_LIST = [

{"name": "Afghanistan", "code": "AF"},
{"name": "Åland Islands", "code": "AX"},
{"name": "Albania", "code": "AL"},
{"name": "Algeria", "code": "DZ"},
{"name": "American Samoa", "code": "AS"},
{"name": "AndorrA", "code": "AD"},
{"name": "Angola", "code": "AO"},
{"name": "Anguilla", "code": "AI"},
{"name": "Antarctica", "code": "AQ"},
{"name": "Antigua and Barbuda", "code": "AG"},
{"name": "Argentina", "code": "AR"},
{"name": "Armenia", "code": "AM"},
{"name": "Aruba", "code": "AW"},
{"name": "Australia", "code": "AU"},
{"name": "Austria", "code": "AT"},
{"name": "Azerbaijan", "code": "AZ"},
{"name": "Bahamas", "code": "BS"},
{"name": "Bahrain", "code": "BH"},
{"name": "Bangladesh", "code": "BD"},
{"name": "Barbados", "code": "BB"},
{"name": "Belarus", "code": "BY"},
{"name": "Belgium", "code": "BE"},
{"name": "Belize", "code": "BZ"},
{"name": "Benin", "code": "BJ"},
{"name": "Bermuda", "code": "BM"},
{"name": "Bhutan", "code": "BT"},
{"name": "Bolivia", "code": "BO"},
{"name": "Bosnia and Herzegovina", "code": "BA"},
{"name": "Botswana", "code": "BW"},
{"name": "Bouvet Island", "code": "BV"},
{"name": "Brazil", "code": "BR"},
{"name": "British Indian Ocean Territory", "code": "IO"},
{"name": "Brunei Darussalam", "code": "BN"},
{"name": "Bulgaria", "code": "BG"},
{"name": "Burkina Faso", "code": "BF"},
{"name": "Burundi", "code": "BI"},
{"name": "Cambodia", "code": "KH"},
{"name": "Cameroon", "code": "CM"},
{"name": "Canada", "code": "CA"},
{"name": "Cape Verde", "code": "CV"},
{"name": "Cayman Islands", "code": "KY"},
{"name": "Central African Republic", "code": "CF"},
{"name": "Chad", "code": "TD"},
{"name": "Chile", "code": "CL"},
{"name": "China", "code": "CN"},
{"name": "Christmas Island", "code": "CX"},
{"name": "Cocos (Keeling) Islands", "code": "CC"},
{"name": "Colombia", "code": "CO"},
{"name": "Comoros", "code": "KM"},
{"name": "Congo", "code": "CG"},
{"name": "Congo, The Democratic Republic of the", "code": "CD"},
{"name": "Cook Islands", "code": "CK"},
{"name": "Costa Rica", "code": "CR"},
{"name": "Cote D'ivoire", "code": "CI"},
{"name": "Croatia", "code": "HR"},
{"name": "Cuba", "code": "CU"},
{"name": "Cyprus", "code": "CY"},
{"name": "Czech Republic", "code": "CZ"},
{"name": "Denmark", "code": "DK"},
{"name": "Djibouti", "code": "DJ"},
{"name": "Dominica", "code": "DM"},
{"name": "Dominican Republic", "code": "DO"},
{"name": "Ecuador", "code": "EC"},
{"name": "Egypt", "code": "EG"},
{"name": "El Salvador", "code": "SV"},
{"name": "Equatorial Guinea", "code": "GQ"},
{"name": "Eritrea", "code": "ER"},
{"name": "Estonia", "code": "EE"},
{"name": "Ethiopia", "code": "ET"},
{"name": "Falkland Islands (Malvinas)", "code": "FK"},
{"name": "Faroe Islands", "code": "FO"},
{"name": "Fiji", "code": "FJ"},
{"name": "Finland", "code": "FI"},
{"name": "France", "code": "FR"},
{"name": "French Guiana", "code": "GF"},
{"name": "French Polynesia", "code": "PF"},
{"name": "French Southern Territories", "code": "TF"},
{"name": "Gabon", "code": "GA"},
{"name": "Gambia", "code": "GM"},
{"name": "Georgia", "code": "GE"},
{"name": "Germany", "code": "DE"},
{"name": "Ghana", "code": "GH"},
{"name": "Gibraltar", "code": "GI"},
{"name": "Greece", "code": "GR"},
{"name": "Greenland", "code": "GL"},
{"name": "Grenada", "code": "GD"},
{"name": "Guadeloupe", "code": "GP"},
{"name": "Guam", "code": "GU"},
{"name": "Guatemala", "code": "GT"},
{"name": "Guernsey", "code": "GG"},
{"name": "Guinea", "code": "GN"},
{"name": "Guinea-Bissau", "code": "GW"},
{"name": "Guyana", "code": "GY"},
{"name": "Haiti", "code": "HT"},
{"name": "Heard Island and Mcdonald Islands", "code": "HM"},
{"name": "Holy See (Vatican City State)", "code": "VA"},
{"name": "Honduras", "code": "HN"},
{"name": "Hong Kong", "code": "HK"},
{"name": "Hungary", "code": "HU"},
{"name": "Iceland", "code": "IS"},
{"name": "India", "code": "IN"},
{"name": "Indonesia", "code": "ID"},
{"name": "Iran, Islamic Republic Of", "code": "IR"},
{"name": "Iraq", "code": "IQ"},
{"name": "Ireland", "code": "IE"},
{"name": "Isle of Man", "code": "IM"},
{"name": "Israel", "code": "IL"},
{"name": "Italy", "code": "IT"},
{"name": "Jamaica", "code": "JM"},
{"name": "Japan", "code": "JP"},
{"name": "Jersey", "code": "JE"},
{"name": "Jordan", "code": "JO"},
{"name": "Kazakhstan", "code": "KZ"},
{"name": "Kenya", "code": "KE"},
{"name": "Kiribati", "code": "KI"},
{"name": "Korea, Democratic", "code": "KP"},
{"name": "Korea, Republic of", "code": "KR"},
{"name": "Kuwait", "code": "KW"},
{"name": "Kyrgyzstan", "code": "KG"},
{"name": "Lao People", "code": "LA"},
{"name": "Latvia", "code": "LV"},
{"name": "Lebanon", "code": "LB"},
{"name": "Lesotho", "code": "LS"},
{"name": "Liberia", "code": "LR"},
{"name": "Libyan Arab Jamahiriya", "code": "LY"},
{"name": "Liechtenstein", "code": "LI"},
{"name": "Lithuania", "code": "LT"},
{"name": "Luxembourg", "code": "LU"},
{"name": "Macao", "code": "MO"},
{"name": "Macedonia, The Former Yugoslav Republic of", "code": "MK"},
{"name": "Madagascar", "code": "MG"},
{"name": "Malawi", "code": "MW"},
{"name": "Malaysia", "code": "MY"},
{"name": "Maldives", "code": "MV"},
{"name": "Mali", "code": "ML"},
{"name": "Malta", "code": "MT"},
{"name": "Marshall Islands", "code": "MH"},
{"name": "Martinique", "code": "MQ"},
{"name": "Mauritania", "code": "MR"},
{"name": "Mauritius", "code": "MU"},
{"name": "Mayotte", "code": "YT"},
{"name": "Mexico", "code": "MX"},
{"name": "Micronesia, Federated States of", "code": "FM"},
{"name": "Moldova, Republic of", "code": "MD"},
{"name": "Monaco", "code": "MC"},
{"name": "Mongolia", "code": "MN"},
{"name": "Montserrat", "code": "MS"},
{"name": "Morocco", "code": "MA"},
{"name": "Mozambique", "code": "MZ"},
{"name": "Myanmar", "code": "MM"},
{"name": "Namibia", "code": "NA"},
{"name": "Nauru", "code": "NR"},
{"name": "Nepal", "code": "NP"},
{"name": "Netherlands", "code": "NL"},
{"name": "Netherlands Antilles", "code": "AN"},
{"name": "New Caledonia", "code": "NC"},
{"name": "New Zealand", "code": "NZ"},
{"name": "Nicaragua", "code": "NI"},
{"name": "Niger", "code": "NE"},
{"name": "Nigeria", "code": "NG"},
{"name": "Niue", "code": "NU"},
{"name": "Norfolk Island", "code": "NF"},
{"name": "Northern Mariana Islands", "code": "MP"},
{"name": "Norway", "code": "NO"},
{"name": "Oman", "code": "OM"},
{"name": "Pakistan", "code": "PK"},
{"name": "Palau", "code": "PW"},
{"name": "Palestinian Territory, Occupied", "code": "PS"},
{"name": "Panama", "code": "PA"},
{"name": "Papua New Guinea", "code": "PG"},
{"name": "Paraguay", "code": "PY"},
{"name": "Peru", "code": "PE"},
{"name": "Philippines", "code": "PH"},
{"name": "Pitcairn", "code": "PN"},
{"name": "Poland", "code": "PL"},
{"name": "Portugal", "code": "PT"},
{"name": "Puerto Rico", "code": "PR"},
{"name": "Qatar", "code": "QA"},
{"name": "Reunion", "code": "RE"},
{"name": "Romania", "code": "RO"},
{"name": "Russian Federation", "code": "RU"},
{"name": "RWANDA", "code": "RW"},
{"name": "Saint Helena", "code": "SH"},
{"name": "Saint Kitts and Nevis", "code": "KN"},
{"name": "Saint Lucia", "code": "LC"},
{"name": "Saint Pierre and Miquelon", "code": "PM"},
{"name": "Saint Vincent and the Grenadines", "code": "VC"},
{"name": "Samoa", "code": "WS"},
{"name": "San Marino", "code": "SM"},
{"name": "Sao Tome and Principe", "code": "ST"},
{"name": "Saudi Arabia", "code": "SA"},
{"name": "Senegal", "code": "SN"},
{"name": "Serbia and Montenegro", "code": "CS"},
{"name": "Seychelles", "code": "SC"},
{"name": "Sierra Leone", "code": "SL"},
{"name": "Singapore", "code": "SG"},
{"name": "Slovakia", "code": "SK"},
{"name": "Slovenia", "code": "SI"},
{"name": "Solomon Islands", "code": "SB"},
{"name": "Somalia", "code": "SO"},
{"name": "South Africa", "code": "ZA"},
{"name": "South Georgia and the South Sandwich Islands", "code": "GS"},
{"name": "Spain", "code": "ES"},
{"name": "Sri Lanka", "code": "LK"},
{"name": "Sudan", "code": "SD"},
{"name": "Suriname", "code": "SR"},
{"name": "Svalbard and Jan Mayen", "code": "SJ"},
{"name": "Swaziland", "code": "SZ"},
{"name": "Sweden", "code": "SE"},
{"name": "Switzerland", "code": "CH"},
{"name": "Syrian Arab Republic", "code": "SY"},
{"name": "Taiwan, Province of China", "code": "TW"},
{"name": "Tajikistan", "code": "TJ"},
{"name": "Tanzania, United Republic of", "code": "TZ"},
{"name": "Thailand", "code": "TH"},
{"name": "Timor-Leste", "code": "TL"},
{"name": "Togo", "code": "TG"},
{"name": "Tokelau", "code": "TK"},
{"name": "Tonga", "code": "TO"},
{"name": "Trinidad and Tobago", "code": "TT"},
{"name": "Tunisia", "code": "TN"},
{"name": "Turkey", "code": "TR"},
{"name": "Turkmenistan", "code": "TM"},
{"name": "Turks and Caicos Islands", "code": "TC"},
{"name": "Tuvalu", "code": "TV"},
{"name": "Uganda", "code": "UG"},
{"name": "Ukraine", "code": "UA"},
{"name": "United Arab Emirates", "code": "AE"},
{"name": "United Kingdom", "code": "GB"},
{"name": "United States", "code": "US"},
{"name": "United States Minor Outlying Islands", "code": "UM"},
{"name": "Uruguay", "code": "UY"},
{"name": "Uzbekistan", "code": "UZ"},
{"name": "Vanuatu", "code": "VU"},
{"name": "Venezuela", "code": "VE"},
{"name": "Viet Nam", "code": "VN"},
{"name": "Virgin Islands, British", "code": "VG"},
{"name": "Virgin Islands, U.S.", "code": "VI"},
{"name": "Wallis and Futuna", "code": "WF"},
{"name": "Western Sahara", "code": "EH"},
{"name": "Yemen", "code": "YE"},
{"name": "Zambia", "code": "ZM"},
{"name": "Zimbabwe", "code": "ZW"}
];         

__API_PATH.US_STATE  =     [
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Alaska",
        "abbreviation": "AK"
    },
    {
        "name": "American Samoa",
        "abbreviation": "AS"
    },
    {
        "name": "Arizona",
        "abbreviation": "AZ"
    },
    {
        "name": "Arkansas",
        "abbreviation": "AR"
    },
    {
        "name": "California",
        "abbreviation": "CA"
    },
    {
        "name": "Colorado",
        "abbreviation": "CO"
    },
    {
        "name": "Connecticut",
        "abbreviation": "CT"
    },
    {
        "name": "Delaware",
        "abbreviation": "DE"
    },
    {
        "name": "District Of Columbia",
        "abbreviation": "DC"
    },
    {
        "name": "Federated States Of Micronesia",
        "abbreviation": "FM"
    },
    {
        "name": "Florida",
        "abbreviation": "FL"
    },
    {
        "name": "Georgia",
        "abbreviation": "GA"
    },
    {
        "name": "Guam",
        "abbreviation": "GU"
    },
    {
        "name": "Hawaii",
        "abbreviation": "HI"
    },
    {
        "name": "Idaho",
        "abbreviation": "ID"
    },
    {
        "name": "Illinois",
        "abbreviation": "IL"
    },
    {
        "name": "Indiana",
        "abbreviation": "IN"
    },
    {
        "name": "Iowa",
        "abbreviation": "IA"
    },
    {
        "name": "Kansas",
        "abbreviation": "KS"
    },
    {
        "name": "Kentucky",
        "abbreviation": "KY"
    },
    {
        "name": "Louisiana",
        "abbreviation": "LA"
    },
    {
        "name": "Maine",
        "abbreviation": "ME"
    },
    {
        "name": "Marshall Islands",
        "abbreviation": "MH"
    },
    {
        "name": "Maryland",
        "abbreviation": "MD"
    },
    {
        "name": "Massachusetts",
        "abbreviation": "MA"
    },
    {
        "name": "Michigan",
        "abbreviation": "MI"
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN"
    },
    {
        "name": "Mississippi",
        "abbreviation": "MS"
    },
    {
        "name": "Missouri",
        "abbreviation": "MO"
    },
    {
        "name": "Montana",
        "abbreviation": "MT"
    },
    {
        "name": "Nebraska",
        "abbreviation": "NE"
    },
    {
        "name": "Nevada",
        "abbreviation": "NV"
    },
    {
        "name": "New Hampshire",
        "abbreviation": "NH"
    },
    {
        "name": "New Jersey",
        "abbreviation": "NJ"
    },
    {
        "name": "New Mexico",
        "abbreviation": "NM"
    },
    {
        "name": "New York",
        "abbreviation": "NY"
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC"
    },
    {
        "name": "North Dakota",
        "abbreviation": "ND"
    },
    {
        "name": "Northern Mariana Islands",
        "abbreviation": "MP"
    },
    {
        "name": "Ohio",
        "abbreviation": "OH"
    },
    {
        "name": "Oklahoma",
        "abbreviation": "OK"
    },
    {
        "name": "Oregon",
        "abbreviation": "OR"
    },
    {
        "name": "Palau",
        "abbreviation": "PW"
    },
    {
        "name": "Pennsylvania",
        "abbreviation": "PA"
    },
    {
        "name": "Puerto Rico",
        "abbreviation": "PR"
    },
    {
        "name": "Rhode Island",
        "abbreviation": "RI"
    },
    {
        "name": "South Carolina",
        "abbreviation": "SC"
    },
    {
        "name": "South Dakota",
        "abbreviation": "SD"
    },
    {
        "name": "Tennessee",
        "abbreviation": "TN"
    },
    {
        "name": "Texas",
        "abbreviation": "TX"
    },
    {
        "name": "Utah",
        "abbreviation": "UT"
    },
    {
        "name": "Vermont",
        "abbreviation": "VT"
    },
    {
        "name": "Virgin Islands",
        "abbreviation": "VI"
    },
    {
        "name": "Virginia",
        "abbreviation": "VA"
    },
    {
        "name": "Washington",
        "abbreviation": "WA"
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV"
    },
    {
        "name": "Wisconsin",
        "abbreviation": "WI"
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY"
    }
];





__API_PATH.Hotel_STEPS  =[
                            {label:"Basic Information"},
                            {label:"Jots"},
                            {label:"Departments"},
                            {label:"Employees"},
                            {label:"Rooms"}
                        ]; 


__API_PATH.DEFAULT_DEPARTMENT  = [
                                    {department_name:"Housekeeper", abbreviation:"H/K"},
                                    {department_name:"Electric", abbreviation:"ELEC"},
                                    {department_name:"Mechanical", abbreviation:"MACH"},
                                    {department_name:"Account", abbreviation:"A/C"},
                                    {department_name:"Admin", abbreviation:"ADMIN"},
                                    
                                 ];
__API_PATH.EMPLOYEE_BLANK_FIELD  = 4;
'use strict';

app.factory('AuthSrv', function ($rootScope) {
    var auth = {
        isLogged: false
    };

    return auth;
});
'use strict';


/*Angular interceptors are service factories that are registered with the $httpProvider */
app.config(['$httpProvider', function($httpProvider){
	var interceptor = ['$q', '$location','localStorageService','AuthSrv','$rootScope', function ($q, $location,localStorageService,AuthSrv,$rootScope) {

		/* Get the application storage type default (localstorage) */
		return {
			request: function (config) {

                config.headers = config.headers || {};
				var token = localStorageService.get('token');
				if (token) {
					config.headers.Authorization = 'Bearer '+ token;
					AuthSrv.isLogged = 1;
				}
				return config;
			},

			requestError: function (rejection) {
				return $q.reject(rejection);
			},

			response: function (response) {
				return response || $q.when(response);
			},

            // Revoke client authentication if 400 is received
            responseError: function (rejection) {
            	return $q.reject(rejection);
            }
        };
    }];

    $httpProvider.interceptors.push(interceptor);
}])
.config(['localStorageServiceProvider', function (localStorageServiceProvider) {
   
   var hostname = window.location.hostname, prefix;
   switch(hostname) {
        case 'localhost':
            prefix = 'admin_local';
            break;
        default:
            prefix = 'default';
   }    
  localStorageServiceProvider.setPrefix(prefix);
}])
.run(['$location','$rootScope','localStorageService','AuthSrv','$templateCache','$timeout',
	function($location, $rootScope,localStorageService,AuthSrv,$templateCache,$timeout){   	
        
        
        $rootScope.$on("$routeChangeStart", 
            function (event, nextRoute, currentRoute) { 
                
                if(nextRoute.$$route){
                    if(nextRoute.$$route.access){
                        $rootScope.isAuth= nextRoute.$$route.access;
                   } 
                }
                
                if ( nextRoute !== null && nextRoute.access !== undefined && nextRoute.access.requiredLogin  && !AuthSrv.isLogged && !localStorageService.get('user')) {
                    AuthSrv.isLogged = 0;                  
                    $location.path("/");
                }/*else {
                   
                    var token = localStorageService.get('token');
                    if(($location.path() === '/login' || $location.path() === '/') && token ){           
                       $location.path("/dashboard");
                    }
                }*/

                $rootScope.$watch(function(newValue, oldValue) {
                    $rootScope.logggedin = AuthSrv.isLogged;
                });

        

        });

        $rootScope.$on("$routeChangeSuccess", function(event, next, current) {
          $templateCache.removeAll(); 

          /*$timeout(function() {
            var viewHeight,windowHeightl,containerHeight;

            viewHeight = document.getElementsByTagName('ng-view')[0].clientHeight;
            windowHeight = window.innerHeight;
            if(windowHeight > viewHeight)
            {

                containerHeight = windowHeight-70;
            }

            if(windowHeight < viewHeight)
            {

                containerHeight = viewHeight-70;
            }


            window.addEventListener('resize', setWindowSize);

              function setWindowSize() { 
                    $rootScope.$apply(function(){
                        viewHeight = document.getElementsByTagName('ng-view')[0].clientHeight;
                        windowHeight = window.innerHeight;
                        if(windowHeight > viewHeight)
                            {

                                containerHeight = windowHeight-70;
                            }

                            if(windowHeight < viewHeight)
                            {

                                containerHeight = viewHeight-70;
                            }
                            $rootScope.iframeHeight = containerHeight;

                    });
              }
          });        

          $rootScope.iframeHeight = window.innerHeight-70;
          window.addEventListener('resize', setWindowSize);
          function setWindowSize() { 
                $rootScope.$apply(function(){$rootScope.iframeHeight = window.innerHeight-70;});
          }*/
        });


    	
    	/* This will logout the user from the application */
    	$rootScope.clearToken = function () {
            localStorageService.remove('token');
            localStorageService.remove('user');
            localStorageService.remove('hotel');
            delete $rootScope.user;
            AuthSrv.isLogged = false;
            $location.path('/');
        };

        // $rootScope.$on( 'TokenExpiredError', function( event, eventData ) {
        //    toastService.alert( {message: eventData.message , class: 'error'});
        // });
        
        /* Set user for entire application */
    	//$rootScope.admin = localStorageService.get('admin');

	
}]);

"use strict";

app.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider){
    $routeProvider
    
    .when("/", {
        templateUrl: "/modules/home/views/home.html",
        controller: "homeController",
        access: {
            requiredLogin: false,
            headerType:'front_header',
             sidebar: 'no',
        }
    })

    .when("/about-us", {
        templateUrl: "/modules/about/views/about-us.html",
        controller: "aboutUsCtrl",
        access: {
            requiredLogin: false,
            headerType:'front_header',
            sidebar: 'no',
        }
    })

    .when("/contact-us", {
        templateUrl: "/modules/contact/views/contact.html",
        controller: "contactController",
        access: {
            requiredLogin: false,
            headerType:'front_header',
            sidebar: 'no',
        }
    })


    .when("/faq", {
        templateUrl: "/modules/faq/views/faq.html",
        controller : "faqController",
        access: {
            requiredLogin: false,
            headerType:'front_header',
             sidebar: 'no',
        }
    })

    .when("/demo", {
        templateUrl: "/modules/demo/views/demo.html",
        controller: "demoController",
        access: {
            requiredLogin: false,
            headerType:'front_header',
            sidebar: 'no',
        }
    })


    .when("/login", {
        templateUrl : "/modules/login/views/login.tpl.html",
        controller: "loginController",
        access: {
            requiredLogin: false,
             sidebar: 'no',
        }
    })
     .when("/resetpassword/:token", {
        templateUrl : "/modules/login/views/resetpassword.html",
        controller  :  "resetPasswordCtlr",
        access: {
           requiredLogin: false,
            headerType:'front_header',
            sidebar: 'no',
        }
    })    

    .when("/register", {
        templateUrl : "/modules/register/views/register.tpl.html",
        controller  :  "registerController",
        access: {
            requiredLogin: false,
             sidebar: 'no',
        }
    })
    .when("/dashboard", {
        templateUrl : "/modules/dashboard/views/dashboard-home.html",
        controller  :  "dashboardController",
        access: {
            requiredLogin: true, 
            headerType:'hotel_header',
            sidebar: 'no',
            outside:'yes'
        }
    })


    .when("/dashboard/hotel-setup/:steps?", {
        templateUrl : "/modules/dashboard/views/steps.html",
        controller  :  "hotelSetupController",
        access: {
           requiredLogin: false,
            headerType:'hotel_header',
            sidebar: 'no',
        }
    })


    .when("/dashboard/hotelboard/:type?", {
        templateUrl : "/modules/jot/views/hotelboard.html",
        //controller  :  "dashboardController",
        controller  :  "hotelBoardController",
        access: {
            requiredLogin: true, 
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })

  
    .when("/dashboard/employee", {
        templateUrl : "/modules/employee/views/employee.html",
        controller  :  "employeeController",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })
    .when("/dashboard/employee_schedule", {
        templateUrl : "/modules/employee/views/scheduler.html",
        controller  :  "schedulerController",
        controllerAs  :  "ctlr",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })
    .when("/dashboard/department", {
        templateUrl : "/modules/department/views/department.html",
        controller  :  "departmentController",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })
    .when("/dashboard/inventory", {
        templateUrl : "/modules/vending_machine/views/inventory.html",
        controller  :  "inventoryController",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })

    .when("/dashboard/inventory_category", {
        templateUrl   : "/modules/vending_machine/views/inventory_category.html",
        controller    : "inventoryCatController",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })
    .when("/dashboard/lost_found", {
        templateUrl   : "/modules/lost_found/views/lost_found_management.html",
        controller    : "lostFoundManagementController",
        controllerAs  : "ctrl",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })

    .when("/dashboard/profile", {
        templateUrl   : "/modules/profile/views/profile.html",
        controller    : "profileController",
        access: {
            requiredLogin: true,
            headerType:'hotel_header',
            sidebar: 'no'
        }
    })

    .when("/dashboard/phone_directory", {
        templateUrl   : "/modules/phone_directory/views/phone_directory.html",
        controller    : "phoneDirController",
        controllerAs  : "ctrl",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })

    .when("/dashboard/document_center", {
        templateUrl   : "/modules/document_center/views/document_center.html",
        controller    : "documentCenterController",
        controllerAs    : "ctrl",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })

   .otherwise({
    redirectTo: '/modules/error/views/404.html'

    });
        $locationProvider.html5Mode(true);     
    }]);
"use strict";

app.controller('aboutUsCtrl',['$scope',
	function($scope){
}]);
"use Strict";

app.controller('contactController',['$scope',
	function($scope){

}]);
"use strict";

app.controller('dashboardController', ['$scope','$location','localStorageService','$rootScope','$mdDialog','toastService','globalRequest',
	function($scope,$location, localStorageService,$rootScope,$mdDialog,toastService,globalRequest) {

		/*
		*
		* Redirect user if not hotel owner
		*
		*/	

		var userDetail = localStorageService.get('user');
		if(userDetail.role == 'staff')
		{
			$location.path('/dashboard/hotelboard');
			return false;
		}


		/*
		*
		* Get hotels list
		*
		*/
		
		globalRequest.getHotels();



		/*
		* Function
		*
		* Open popup to add new hotel.
		*
		*/


		$scope.openHotelSetupWizard = function(){
			localStorageService.remove('processingHotel');
			$location.path('/dashboard/hotel-setup/1');	
		};		


		/*
		* Function
		*
		* Set hotel id in local storage and redirect to jot related to selected hotel
		*
		*/
		

		$scope.redirectToJot = function(hotel){
			
			globalRequest.getHotelStatus(hotel._id).then(function(response){				

				var completedStep;	

				if(response[0].step != 'completed')
				{
					if(response[0].jot_types.length == 0)
					{
						completedStep = 2;

					} else if(response[0].departments.length == 0) {
						completedStep = 3;

					} else if(response[0].members.length == 0) {
						completedStep = 4;
					} else {
						completedStep = 'completed';
					}
				} else {
					completedStep = 'completed';
				}



				if(completedStep == 'completed')
				{
					localStorageService.set('hotel', hotel);			
					$location.path('/dashboard/hotelboard');
				} else {
					localStorageService.set('processingHotel',hotel);
					$location.path('/dashboard/hotel-setup');
				}


			});
		};


		/*
		* Function
		*
		* Delete hotels
		*
		*/
		
		
		$scope.deleteHotel = function(event,hotelID){

			var storedHotelID = localStorageService.get('hotel');		
			if(storedHotelID && storedHotelID._id == hotelID)
			{
				localStorageService.remove('hotel');
			}	

			var data = {
				"hotel_id":hotelID
			};
			var request={
					url:window.__API_PATH.DELETE_HOTEL,
					method:"DELETE",
					params:data
				};
			
			globalRequest.jotCRUD(request).then(function(response){
				if(response.success)
				{
					var popup = {"message":response.message,"class":"success"};
					toastService.alert(popup);
				}
			});		
		};


	}
]);

"use strict";

app.controller('dashboardPopupController', ['$scope','$http','$location','$timeout','localStorageService','globalRequest','$rootScope','$mdDialog','$route','toastService',
	function($scope,$http,$location,$timeout, localStorageService,globalRequest,$rootScope,$mdDialog,$route,toastService) {	


		$scope.currencyList = window.__API_PATH.CURRENCY_LIST;

		/*
		* Function
		*
		* Close popup of new hotel add.
		*
		*/

		$scope.close = function(){
			 $mdDialog.cancel();
		};

		/*
		* Factory method
		*
		* Add new hotel data
		*
		*/
		$scope.hotelResult = {message:'',class:'',status:''};
		$scope.addNewHotel = function(){
			var acceptTerm = $scope.terms;	
			if(acceptTerm)
			{
				$scope.message = ' ';		

				 var hotelDataObj = {
				 		user_id     	   : localStorageService.get('user')._id,
						hotelname          : $scope.hotelname,
						ownername          : $scope.ownername,
						currency           : $scope.currency,
						email              : $scope.email,
						phone              : $scope.phone,
						address            : $scope.address,
						city               : $scope.city,
						zipcode            : $scope.zipcode,
						state              : $scope.state,
						country            : $scope.country,
						no_of_guestrooms   : $scope.no_of_guestrooms,
						room_no            : $scope.room_no,
						vending_area       : $scope.vending_area,
						no_of_employee     : $scope.no_of_employee,
						no_of_meetingrooms : $scope.no_of_meetingrooms,
						no_of_floors       : $scope.no_of_floors,
						arrangement_type   : $scope.arrangement_t
				};

				var request={
						url:window.__API_PATH.ADD_HOTEL,
						method:"POST",
						data:hotelDataObj
					};

				globalRequest.jotCRUD(request).then(function(response){								
					$scope.hotelResult 	 = response;
					
					if(response.status == 1)
					{
						$rootScope.hotels.push(response.result);
						$mdDialog.cancel();
						var popup = {"message":response.message,"class":"success"};
						toastService.alert(popup);
					}				

				});

			} else {
				$scope.hotelResult.class = 'Autherror';
				$scope.hotelResult.message = 'Please accept terms and conditions.';
				$scope.hotelResult.status = 1;
			}	
			
		};
		
	}
]);



"use strict";

app.controller('hotelSetupController', ['$scope','$rootScope','$routeParams','$location','globalRequest','localStorageService',
	function($scope,$rootScope,$routeParams,$location,globalRequest,localStorageService) {	

		/*********   Get hotel setup wizard current hotel  ************/

		var hotelData   = localStorageService.get('processingHotel');

		if(!hotelData)	
		{			
			/*********   Redirect if no hotel is in wizard  ************/

			$location.path('/dashboard/hotel-setup/1');
			//return false;

		} else {						

			/**************************************************
			* Check hotel blank steps
			***************************************************/

			globalRequest.getHotelStatus(hotelData._id).then(function(response){
				
				$rootScope.hotelStatus = response[0];

				$scope.selectedDepartment = response[0].departments;
				
				var completedStep = 1;
				var redirectPath = '/dashboard';

				if(response[0].step != 'completed')
				{
					if(response[0].jot_types.length == 0)
					{
						completedStep = 2;

					} else if(response[0].departments.length == 0) {
						completedStep = 3;

					} else if(response[0].members.length == 0) {
						completedStep = 4;
					} else {
						completedStep = 'completed';
					}
					

				} else {
					
					completedStep = 'completed';
				}

				$scope.ActiveStep = $routeParams.steps;

				if(completedStep != 'completed')
				{			

					/**************************************************
					* Redirect on step from where user left the process
					***************************************************/

					if($scope.ActiveStep)
					{
						if($scope.ActiveStep > completedStep)
						{						
							redirectPath = '/dashboard/hotel-setup/'+completedStep;
						} else if($scope.ActiveStep <= completedStep){

							redirectPath = '/dashboard/hotel-setup/'+$scope.ActiveStep;
						}
					} else {					
						redirectPath = '/dashboard/hotel-setup/'+completedStep;
					}
				} else {

					/***********************************************************			
					* Clear the wizard procession data from localStorageService
					* Redirect on dashboard if all steps completed
					***********************************************************/

				   localStorageService.remove('processingHotel');
				   redirectPath = '/dashboard';
				}


				$location.path(redirectPath);

				if(redirectPath == '/dashboard')
				{
					return false;
				}

			});
			
		}

		/*********   Get setup steps  ************/

		$scope.hotelStepList = window.__API_PATH.Hotel_STEPS;

		/***********************************************************			
		* Render page template according to step in route url			
		***********************************************************/
		$scope.ActiveStep = $routeParams.steps;

		if($scope.ActiveStep)
		{
			$scope.stepsTemplate = '/modules/dashboard/views/step'+$routeParams.steps+'.html';
		}
				
	}
]);

"use strict";

app.controller('step1Controller', ['$scope','$rootScope','$routeParams','$location','globalRequest','localStorageService',
	function($scope,$rootScope,$routeParams,$location,globalRequest,localStorageService) {	

		$scope.currencyList = window.__API_PATH.CURRENCY_LIST;
		var hotelData   = localStorageService.get('processingHotel');

		$scope.countryList = window.__API_PATH.COUNTRY_LIST;
		$scope.stateList = window.__API_PATH.US_STATE;


		/************************************************
		* Append value if hotel already exists
		*************************************************/

		if(hotelData)
		{

			globalRequest.getHotelStatus(hotelData._id).then(function(response){
					angular.forEach(response[0],function (value,key) {					
							$scope[key] = value;					    
					});
			});
		}

		/************************************************
		* Step1 submit to create the hotel
		*************************************************/

		$scope.step1FormSubmit = function(){
			var acceptTerm = $scope.terms;	
			$scope.hotelResult = {class:"",message:"",status:""};
			if(acceptTerm)
			{
			

				 var hotelDataObj = {
				 		user_id     	   : localStorageService.get('user')._id,
						hotelname          : $scope.hotelname,
						ownername          : $scope.ownername,
						currency           : $scope.currency,
						email              : $scope.email,
						phone              : $scope.phone,
						address            : $scope.address,
						city               : $scope.city,
						zipcode            : $scope.zipcode,
						state              : $scope.state,
						country            : $scope.country,
						hotel_id		   : null
						
				};



				var request={
						url:window.__API_PATH.ADD_HOTEL,
						method:"POST",
						data:hotelDataObj
					};

				if(hotelData)
				{
					request.url 		  = window.__API_PATH.UPDATE_HOTEL;
					request.method 		  = "PUT";
					request.data.hotel_id = hotelData._id;
				}
				
				globalRequest.jotCRUD(request).then(function(response){						
					
					localStorageService.set('processingHotel',response.result);							
					if(response.status == 1)
					{	var nextStep   = parseInt($routeParams.steps)+1;					
						$location.path('/dashboard/hotel-setup/'+nextStep);
					}		

				});

			} else {
				$scope.hotelResult.class = 'Autherror';
				$scope.hotelResult.message = 'Please accept terms and conditions.';
				$scope.hotelResult.status = 1;
			}
		};		
				
	}
]);

"use strict";

app.controller('step2Controller', ['$scope','$rootScope','$routeParams','$location','localStorageService','globalRequest',
	function($scope,$rootScope,$routeParams,$location,localStorageService,globalRequest) {	

		
		$scope.defaultBoards = window.__API_PATH.JOT_TYPES;
		var processingHotel = localStorageService.get('processingHotel');

		/************************************************
		* Navigate on previous page
		*************************************************/

		$scope.navigateBack = function(){
			var page = $routeParams.steps - 1;			
			$location.path('/dashboard/hotel-setup/'+page);
		};

		/************************************************
		* Step2 form submit
		*************************************************/

		$scope.step2FormSubmit = function(){

			$scope.featureResult = {class:"",message:"",status:""};

			var getSelectedValues = [];
			for (var key in $scope.step2Ctlr.selectFeature) {
				if($scope.step2Ctlr.selectFeature[key]){							
			    	getSelectedValues.push($scope.step2Ctlr.selectFeature[key].id);
				}
			}
			
			if(getSelectedValues.length > 0)
			{		

				 var hotelDataObj = {
				 		hotel_id     	   : processingHotel._id,
				 		jot_types 		   : getSelectedValues						
						
				};

				var request={
						url:window.__API_PATH.UPDATE_HOTEL,
						method:"PUT",
						data:hotelDataObj
					};

				globalRequest.jotCRUD(request).then(function(response){	
											
					if(response.status == 1)
					{
						var nextStep   = parseInt($routeParams.steps) +1;

						$location.path('/dashboard/hotel-setup/'+nextStep);
					}				

				});

			} else {
				$scope.featureResult.class = 'Autherror';
				$scope.featureResult.message = 'Please Select at least one jot type.';
				$scope.featureResult.status = 1;
			}
		};	



				
	}
]);

"use strict";

app.controller('step3Controller', ['$scope','$routeParams','$location','localStorageService','globalRequest',
	function($scope,$routeParams,$location,localStorageService,globalRequest) {	

		var processingHotel = localStorageService.get('processingHotel');

		/************************************************
		* Navigate on previous page
		*************************************************/

		$scope.navigateBack = function(){
			var page = $routeParams.steps - 1;			
			$location.path('/dashboard/hotel-setup/'+page);
		};


		/************************************************************	
		* Default department list
		************************************************************/
		if($scope.selectedDepartment.length > 0)
		{
			$scope.defaultDepartment = $scope.selectedDepartment;
		} else {
			$scope.defaultDepartment = window.__API_PATH.DEFAULT_DEPARTMENT;
		}
		


		/*****************************************************
		* Append new blank field
		*****************************************************/

		$scope.blankFieldCount = [];		
		$scope.addmore = function(){			
			$scope.blankFieldCount.push({department_name:"",abbreviation:""});		
		};

		/************************************************
		* Delte Last element
		*************************************************/

		$scope.deleteDeptRow = function(dept,iterationList,ind){

			$scope[iterationList].splice(ind, 1);

			if(iterationList == 'defaultDepartment'){
				delete $scope.step3Ctlr.department_name[dept.department_name]; 
				delete $scope.step3Ctlr.abbreviation[dept.department_name]; 
			}

			if(iterationList == 'blankFieldCount'){
				delete $scope.step3Ctlr.department_name[ind]; 
				delete $scope.step3Ctlr.abbreviation[ind];
			}

			 
		};


		/************************************************
		* Step3 form submit
		*************************************************/

		$scope.step3FormSubmit = function(){

	
			var removeKeyFromArray = [];
			for (var key in $scope.step3Ctlr.department_name) {
				
				if($scope.step3Ctlr.department_name[key])
				{
					removeKeyFromArray.push({
						hotel_id        : processingHotel._id,
						department_name : $scope.step3Ctlr.department_name[key],
						abbreviation    : $scope.step3Ctlr.abbreviation[key]
					});
				}
								
			}	
	
			$scope.departmentResult = {class:"",message:"",status:""};

			if(removeKeyFromArray.length > 0)
			{
				$scope.message = ' ';		

				 var hotelDataObj = {
				 		hotel_id     	       : processingHotel._id,
				 		departments_list 	   : removeKeyFromArray	
				};

				var request={
						url:window.__API_PATH.CONFIGURE_DEPARTMENTS,
						method:"POST",
						data:hotelDataObj
					};

				globalRequest.jotCRUD(request).then(function(response){				
											
					if(response.status == 1)
					{
						var nextStep   = parseInt($routeParams.steps) +1;					
						$location.path('/dashboard/hotel-setup/'+nextStep);
					}				

				});

			} else {
				$scope.departmentResult.class   = 'Autherror';
				$scope.departmentResult.message = 'Please enter at least one department.';
				$scope.departmentResult.status  = 1;
			}
		};
			
				
	}
]);
"use strict";

app.controller('step4Controller', ['$scope','$rootScope','$routeParams','$location','localStorageService','globalRequest',
	function($scope,$rootScope,$routeParams,$location,localStorageService,globalRequest) {	

		var processingHotel = localStorageService.get('processingHotel');


		/************************************************
		* Create iteration for department
		*************************************************/

		$scope.defaultBlankField = window.__API_PATH.EMPLOYEE_BLANK_FIELD;
		function getNumberInArray(data){
			return new Array(data);
		}
		
		$scope.getIteration = [];
		angular.forEach($scope.selectedDepartment,function(value,kay){
			$scope.getIteration[value._id] =  getNumberInArray($scope.defaultBlankField);
		});	

		/*****************************************************
		* Append blank field in list of particular department
		*****************************************************/	

		$scope.addmore = function(deptID){
			$scope.getIteration[deptID].push(1);

		};


		/************************************************
		* Delte Last element
		*************************************************/

		$scope.deleteEmpRow = function(deptID,ind){
			$scope.stepsCtrl[deptID+ind] = '';
			$scope.getIteration[deptID].splice(ind, 1);
			//var elem = document.getElementById(deptID+ind);
			//elem.parentNode.removeChild(elem);			
		};
			

		/************************************************
		* Navigate on previous page
		*************************************************/

		$scope.navigateBack = function(){
			var page = $routeParams.steps - 1;			
			$location.path('/dashboard/hotel-setup/'+page);
		};	


		/************************************************
		* Step4 form submit
		*************************************************/

		$scope.step4FormSubmit = function(){
			var selectedEmployee = [];
			angular.forEach($scope.stepsCtrl,function(value,key){
				if(value.first_name)
				{
					value.hotel_id = processingHotel._id;
					value.status   = 'inactive';
					value.password = '123456';
					selectedEmployee.push(value);
				}
			});

			$scope.empResult = {class:"",message:"",status:""};		


			if(selectedEmployee.length > 0)
			{
						

				 var hotelDataObj = {
				 		hotel_id     	       : processingHotel._id,
				 		member_list 	       : selectedEmployee	
				};

				var request={
						url:window.__API_PATH.CONFIGURE_MEMBERS,
						method:"POST",
						data:hotelDataObj
					};

				globalRequest.jotCRUD(request).then(function(response){	
					$scope.empResult = response;
					if(response.status == 1)
					{	

						/************************************************
						* Mark steps completed
						*************************************************/

						var hotelrequest={
								url:window.__API_PATH.UPDATE_HOTEL,
								method:"PUT",
								data:{hotel_id : processingHotel._id,step:'completed'}
							};
						globalRequest.jotCRUD(hotelrequest).then(function(hotelresponse){
							if(hotelresponse.status == 1)
							{	
								$location.path('/dashboard/hotel-setup');
							}	
						});						
					}				

				});

			} else {
				$scope.empResult.class   = 'Autherror';
				$scope.empResult.message = 'Please enter at least one employee.';
				$scope.empResult.status  = 1;
			}
			
		};

			
			
	}
]);

"use Strict";

app.controller('demoController',['$scope',
	function($scope){

}]);
"use strict";

app.controller('departmentController', ['$scope','localStorageService','globalRequest','$mdDialog','toastService',
	function($scope,localStorageService,globalRequest,$mdDialog,toastService) {
		var hotel = localStorageService.get('hotel');


		/************************************
		* Blank all field before open form
		*************************************/	

		$scope.blank = function(){
			$scope.department_name = "";		
			$scope.department_abbreviation = "";		
			$scope.department_desc = "";
		};

		$scope.blankFields = function(){
			$scope.blank();
			$scope.departmentResult = "";
		};

		
		/************************************
		* Get department list
		*************************************/	
				
		globalRequest.getDepartments();

		/************************************
		* Add Department
		*************************************/		
		

		$scope.addDepartment = function(){	

			var departmentName	=	$scope.department_name;
			var Abbreviation	=	$scope.department_abbreviation;
			if(!Abbreviation){
				if(departmentName){
					var departmentNameArray = departmentName.match(/\b(\w)/g);
				    Abbreviation        = departmentNameArray.join('');
				} 				
			}

			var request = {
			            url:window.__API_PATH.ADD_DEPARTMENT,
			            method:"POST",
			            data:{
			            	hotel_id      	   :  hotel._id,
			            	department_name    :  departmentName,
			            	abbreviation       :  Abbreviation,
			            	bgcolor       	   :  $scope.bgcolor,
			            	description        :  $scope.department_desc
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){
			 	$scope.departmentResult = response;
				$scope.blank();
			 	if(response.status == 1)
			 	{
			 		if(!$scope.departmentList)
			 		{
			 			$scope.departmentList = [];
			 		}
			 		$scope.departmentList.push(response.result);
			 		
			 		$scope.department_name = $scope.department_abbreviation = $scope.department_desc = '';			 		
			 	}
			 });

		};


		/*****************************************
		* Open edit department
		*****************************************/	

		$scope.openEditDepartment = function(detail){
				$mdDialog.show({
					controller: 'editDepartmentController',
					templateUrl: '/modules/department/views/edit_department.html',
					parent: angular.element(document.body),
					fullscreen: $scope.customFullscreen,
					clickOutsideToClose:true,	
					locals:{deptDetail:{detail:detail,prevScope:$scope}}				
				}).then(function(answer) {}, function() {});

		};


		/*****************************************
		* Delete department
		*****************************************/	

		$scope.removeDepartment = function(detail){

			var request={
				url:window.__API_PATH.DELETE_DEPARTMENT,
				method:"DELETE",
				params:{_id:detail._id}
			};
			
			globalRequest.jotCRUD(request).then(function(response){				
				$mdDialog.cancel();
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
			});

		};
		
	}
]);






"use strict";

app.controller('editDepartmentController', ['$scope','localStorageService','globalRequest','deptDetail','$mdDialog',
	function($scope,localStorageService,globalRequest,deptDetail,$mdDialog) {
		var hotel = localStorageService.get('hotel');

		
		/***********************************************
		* Pass edited employee value in current scope
		***********************************************/
				

		angular.forEach(deptDetail.detail,function (value,key) {
		    $scope[key] = value;
		});
		
		/************************************
		* Edit employee
		*************************************/		
		

		$scope.updateDepartment = function(){
			

			var departmentName	=	$scope.department_name;
			var Abbreviation	=	$scope.abbreviation;
			if(!Abbreviation){
				if(departmentName){
					var departmentNameArray = departmentName.match(/\b(\w)/g);
				    Abbreviation        = departmentNameArray.join('');
				} 				
			}

			var request = {
			            url:window.__API_PATH.UPDATE_DEPARTMENT,
			            method:"PUT",
			            data:{
			            	_id      	       :  $scope._id,
			            	department_name    :  departmentName,
			            	abbreviation       :  Abbreviation,
			            	bgcolor       	   :  $scope.bgcolor,
			            	description        :  $scope.description
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){
			 	$scope.departmentEditResult = response;
			 	if(response.status ==1)
			 	{
			 		$mdDialog.cancel();
			 		globalRequest.getDepartments();

			 	}
			 	
			});

		};		
		
	}
]);




"use strict";

app.filter('departmentfilter',function(){
	return function(input,scope){

		if(input)
		{

			var searchDepartmentName  = scope.searchDepartment;
			if(!searchDepartmentName)
			{
				return input;
			}


			input   =   input.filter(function( obj ) {							

							if(searchDepartmentName)
							{
								if (obj.department_name.match(new RegExp("(" + searchDepartmentName + ")", "i"))) 
								{
							       return true;
							    }
							}

						});
		}
		return input;

	};

});
"use strict";

app.controller('EditDocumentController', ['$scope','$rootScope','localStorageService','globalRequest','Detail','$mdDialog','Upload','$timeout',
	function($scope,$rootScope,localStorageService,globalRequest,Detail,$mdDialog,Upload,$timeout) {
		var hotel = localStorageService.get('hotel');
		/***********************************************
		* Pass edited employee value in current scope
		***********************************************/
		angular.forEach(Detail.detail,function (value,key) {
		    if(key == 'tags')
			{
				$scope.ctrl.itemTagModel = value;

			} else if(key == 'department'){

				$rootScope.department = value;

			} else if(key == 'files'){

				$scope.filesData = value;

			} else {
				$scope[key] = value;
			}
		});	


		/************************************
		* Edit document
		*************************************/		

		$scope.editDC = function(){	
			
			var request = {
		            url:window.__API_PATH.UPDATE_DOCUMENT,
		            method:"PUT",
		            data:{
		            	_id      	   			:  $scope._id,
		            	document_name   		:  $scope.document_name,
		            	department      		:  $rootScope.department,
		            	tags        			:  $scope.ctrl.itemTagModel,
		            	document_description    :  $scope.document_description,
		            	files       		    :  $scope.filesData,
		            	upload_date				:  new Date().getTime()
		            }
		          };

			globalRequest.jotCRUD(request).then(function(response){
			 	$scope.docEditResult = response;
			 	if(response.status ==1)
			 	{
			 		$mdDialog.cancel();
			 		globalRequest.getDocument();
			 	}

			 });

		};

	/************************************
	* Remove files by index
	*************************************/	

	$scope.removeImageIndex = function(fData){
		$scope.filesData = $scope.filesData.filter(function( obj ) {
				    return obj.filename != fData.filename;
				});

	};



	$scope.$watch('files', function () {		
        $scope.uploadDocument($scope.files);
    });

    $scope.$watch('file', function () {
        if ($scope.file != null) {
            $scope.files = [$scope.file];
        }
    });
  

	/*****************************************
	* Profile image upload
	*****************************************/	

	$scope.uploadDocument = function(files, errFiles) {			
        if (files && files.length) {	
            Upload.upload({
                url: window.__API_PATH.UPLOAD_FILE,
                type:'post',
                arrayKey: '',
                data: {	                    
                    hotel_id     : hotel._id,
                    folder_name  : 'document_center',	                    
                    file         : files
                }
            }).then(function (response) {
                $timeout(function () {
                   //$scope.filesData.push(response.data.result);
                   Array.prototype.push.apply($scope.filesData,response.data.result);
                   console.log($scope.filesData);

                });
            }, function (response) {
                if (response.status > 0) {
                    $scope.errorMsg = response.status + ': ' + response.data;
                }
            }, function (evt) {
                $scope.documentProgress = 
                    Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            });
        }

    };

	}
]);
"use strict";

app.controller('documentCenterController',['$scope','$rootScope','globalRequest','localStorageService','$mdDialog','toastService','Upload','$timeout',function($scope,$rootScope,globalRequest,localStorageService,$mdDialog,toastService,Upload,$timeout){
	var hotel = localStorageService.get('hotel');

	/************************************
	* Blank all field before open form
	*************************************/	

	$scope.blank = function(){
		$scope.document_name 		= "";		
		$scope.document_description = "";
		$scope.filesData 			= "";
		$rootScope.department 		= "";
		$scope.documentProgress 	= -1;
		$scope.documentResult 		= "";	
	};

	$scope.blankFields = function(){
		$scope.blank();
		$scope.ctrl.itemTagModel 	= [];
	};


	/**********************************************************
    * Item tags 
    **********************************************************/

	var self = this;
    self.readonly = false;	    
    self.itemTag = [];
    self.itemTagModel = angular.copy(self.itemTag);
    self.editableitemTag = angular.copy(self.itemTag);
    self.tags = [];	    
    self.newVeg = function(chip) {
      return {
        name: chip,
        type: 'unknown'
      };
    };

    /************************************
	* Get documents
	*************************************/

    globalRequest.getDocument();

    /************************************
	* Get department list
	*************************************/			
	
	globalRequest.getDepartments();

	/************************************
	* Add documents
	*************************************/	
	
	$scope.addDC = function(){	
		var request = {
		            url:window.__API_PATH.ADD_DOCUMENT,
		            method:"POST",
		            data:{
		            	hotel_id      			:  hotel._id,
		            	document_name   		:  $scope.document_name,
		            	department      		:  $rootScope.department,
		            	tags        			:  $scope.ctrl.itemTagModel,
		            	document_description    :  $scope.document_description,
		            	files       		    :  $scope.filesData,
		            	upload_date				:  new Date().getTime()
		            }
		    };

		globalRequest.jotCRUD(request).then(function(response){
			console.log(response);
		 	$scope.documentResult = response;

		 	if(response.status == 1)
		 	{
		 		$scope.blankFields();				
		 		if(!$scope.documentList)
		 		{
		 			$scope.documentList = [];
		 		}
		 		$scope.documentList.push(response.result);
		 		
		 	}
		 });

	};

	/*****************************************
	* Open edit Contact
	*****************************************/	

	$scope.openDocumentFileView = function(detail){
			$mdDialog.show({
				controller: 'documentViewController',
				templateUrl: '/modules/document_center/views/view_files.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true,	
				locals:{Detail:{detail:detail,prevScope:$scope}}				
			}).then(function(answer) {}, function() {});

	};

	/*****************************************
	* Open edit Contact
	*****************************************/	

	$scope.openDocumentEditPopup = function(detail){
			$mdDialog.show({
				controller: 'EditDocumentController',
				controllerAs: 'ctrl',
				templateUrl: '/modules/document_center/views/edit_document.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true,	
				locals:{Detail:{detail:detail,prevScope:$scope}}				
			}).then(function(answer) {}, function() {});

	};

	

	/*****************************************
	* Delete contact
	*****************************************/	

	$scope.removeDc = function(detail){

		var request={
			url:window.__API_PATH.DELETE_DOCUMENT,
			method:"DELETE",
			params:{_id:detail._id}
		};
		
		globalRequest.jotCRUD(request).then(function(response){				
			var popup = {"message":response.message,"class":response.class};
			toastService.alert(popup);
		});

	};

	$scope.$watch('files', function () {
        $scope.uploadDocument($scope.files);
    });

    $scope.$watch('file', function () {
        if ($scope.file != null) {
            $scope.files = [$scope.file];
        }
    });
  

	/*****************************************
	* Profile image upload
	*****************************************/	

	$scope.uploadDocument = function(files, errFiles) {			

        if (files && files.length) {	
            Upload.upload({
                url: window.__API_PATH.UPLOAD_FILE,
                type:'post',
                arrayKey: '',
                data: {	                    
                    hotel_id     : hotel._id,
                    folder_name  : 'document_center',	                    
                    file         : files
                }
            }).then(function (response) {
                $timeout(function () {
                   $scope.filesData = response.data.result;
                });
            }, function (response) {
                if (response.status > 0) {
                    $scope.errorMsg = response.status + ': ' + response.data;
                }
            }, function (evt) {
                $scope.documentProgress = 
                    Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            });
        }

    };
	
	
}]);
"use strict";

app.controller('documentViewController', ['$scope','Detail',
	function($scope,Detail) {
		
		/***********************************************
		* Pass edited employee value in current scope
		***********************************************/
		angular.forEach(Detail.detail,function (value,key) {
		    $scope[key] = value;
		});	
		console.log($scope);
	}
]);




"use strict";

app.filter('dcDepartmentFilter',function(){
	return function(input,scope){
		if(input)
		{

			var searchDepartment        = scope.searchDepartment;
			if(!searchDepartment){
				return input;
			}

	
			input   =   input.filter(function( obj ) {
							if(obj.department.indexOf(searchDepartment) != -1)
							{
								return true;
							}
						});
		}
		return input;
	};

});
"use strict";

app.controller('editEmployeeController', ['$scope','localStorageService','globalRequest','Upload','$timeout','empDetail','$mdDialog',
	function($scope,localStorageService,globalRequest,Upload,$timeout,empDetail,$mdDialog) {
		var hotel = localStorageService.get('hotel');
		$scope.position_list = window.__API_PATH.POSITION;

		
		/***********************************************
		* Pass edited employee value in current scope
		***********************************************/
		

		$scope.departmentList = empDetail.prevScope.departmentList;

		angular.forEach(empDetail.detail,function (value,key) {
		    $scope[key] = value;
		});
		
		if($scope.profile_image[0])
		{
			$scope.image = '/images/hotel/'+$scope.hotel_id+'/profile/'+$scope.profile_image[0];
		} else {
			$scope.image = '/assets/images/default_profile.png';
		}

		/************************************
		* Edit employee
		*************************************/		
		

		$scope.editEmployee = function(){
	
			var status  = ($scope.status)?$scope.status:'inactive';			
			var request = {
			            url:window.__API_PATH.UPDATE_MEMBER,
			            method:"PUT",
			            data:{
			            	_id  		  :  $scope._id,
			            	first_name    :  $scope.first_name || null,
			            	last_name     :  $scope.last_name || null,
			            	contact_number:  $scope.contact_number || null,
			            	email         :  $scope.email || null,
			            	status 		  :  status,
			            	department    :  $scope.department,
			            	profile_image :  $scope.profileimages,
			            	position 	  :  $scope.position,
			            	address 	  :  $scope.address
			            }
			          };

			globalRequest.jotCRUD(request).then(function(response){
			 	$scope.memberEditResult = response;
			 	if(response.status ==1)
			 	{
			 		$mdDialog.cancel();
			 		globalRequest.getStaff();
			 	}

			 });

		};

		/*****************************************
		* Profile image upload
		*****************************************/	

		$scope.uploadprofileImage = function(files, errFiles) {
			$scope.profile = files;	
			
	        if (files && files.length) {
	            Upload.upload({
	                url: window.__API_PATH.UPLOAD_FILE,
	                type:'post',
	                arrayKey: '',
	                data: {	                    
	                    hotel_id     : hotel._id,
	                    folder_name  : 'profile',	                    
	                    file         : files
	                }
	            }).then(function (response) {
	                $timeout(function () {
	                   console.log(response);
	                   $scope.profileimages = response.data.result[0].filename;
	                   
	                });
	            }, function (response) {
	                if (response.status > 0) {
	                    $scope.errorMsg = response.status + ': ' + response.data;
	                }
	            }, function (evt) {
	                $scope.profileProgress = 
	                    Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
	            });
	        }

	    };
		
	}
]);




"use strict";

app.controller('editshiftController', ['$scope','localStorageService','globalRequest','shiftDetail','$mdDialog',
	function($scope,localStorageService,globalRequest,shiftDetail,$mdDialog) {
		var hotel = localStorageService.get('hotel');

		/*
		* Get day list in array
		*/
		
		$scope.getDay = function(num) {
		    return new Array(num);   
		};

		/*
		* Get color codes
		*/

		$scope.colorCodes = window.__API_PATH.COLOR_CODE;

		
		/***********************************************
		* Pass edited employee value in current scope
		***********************************************/
				

		angular.forEach(shiftDetail.detail,function (value,key) {

			if(key == 'start_time')
			{

				$scope.start_hour = value[0].hour;
				$scope.start_min = value[0].minute;

			} else if(key == 'end_time'){
	
				$scope.end_hour = value[0].hour;
				$scope.end_min = value[0].minute;

			} else if(key == 'bgcolor'){
	
				$scope.ctlr.bgcolor = value;

			} else {
				$scope[key] = value;
			}
		    
		});


		/************************************
		* Edit employee
		*************************************/		
		

		$scope.updateShift = function(){
	
			var request = {
			            url:window.__API_PATH.UPDATE_HOTELSHIFTS,
			            method:"PUT",
			            data:{
			            	_id      	    :  $scope._id,
			            	shift_name      :  $scope.shift_name,		
		            		department_name :  $scope.department_name,
		            		bgcolor       	:  $scope.ctlr.bgcolor,
		            		start_time      :  { hour:$scope.start_hour,minute:$scope.start_min},		
		            		end_time        :  { hour:$scope.end_hour,minute:$scope.end_min},
	
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){
			 	$scope.shiftEditResult = response;
			 	if(response.status ==1)
			 	{
			 		$mdDialog.cancel();
			 		globalRequest.getShiftTime();
			 	}
			 	
			});

		};		
		
	}
]);




"use strict";

app.controller('employeeController', ['$scope','$rootScope','localStorageService','globalRequest','Upload','$timeout','$mdDialog','toastService',
	function($scope,$rootScope,localStorageService,globalRequest,Upload,$timeout,$mdDialog,toastService) {
		var hotel = localStorageService.get('hotel');
		$scope.position_list = window.__API_PATH.POSITION;


		/************************************
		* Blank all field before open form
		*************************************/

		$scope.blank = function(){
			$scope.first_name = "";
			$scope.last_name = "";
			$scope.contact_number = "";
			$scope.email = "";
			$scope.department = "";
			$scope.position = "";
			$scope.status = "";
			$scope.address = "";
			$scope.profile = "";
			$scope.profileProgress = -1;
			$scope.profileimages = '';
		};

		$scope.blankFields = function(){
			$scope.blank();
			$scope.memberResult = "";
		};

		/************************************
		* Get department list
		*************************************/			
		
		globalRequest.getDepartments();
		
		/************************************
		* Get employee list
		*************************************/		
		globalRequest.getStaff();

		/************************************
		* Add employee
		*************************************/		
		

		$scope.addEmployee = function(){
			
			var status  = ($scope.status)?$scope.status:'inactive';			
			var request = {
			            url:window.__API_PATH.ADD_MEMBER,
			            method:"POST",
			            data:{
			            	hotel_id      :  hotel._id,
			            	first_name    :  $scope.first_name,
			            	last_name     :  $scope.last_name,
			            	contact_number     :  $scope.contact_number,
			            	email         :  $scope.email,
			            	status 		  :  status,
			            	department    :  $scope.department,
			            	profile_image :  $scope.profileimages,
			            	position 	  :  $scope.position,
			            	address 	  :  $scope.address,
			            	role 	      :  'staff',
			            	password      :  '123456',
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){
			 	$scope.memberResult = response;
			 	$scope.blank();
			 	if(response.status == 1)
			 	{
			 		if(!$rootScope.staffList)
			 		{
			 			$rootScope.staffList = [];
			 		}
			 		$rootScope.staffList.push(response.result);
			 	}
			 });

		};

		/*****************************************
		* Open edit employee
		*****************************************/	

		$scope.openEditForm = function(detail){
			$mdDialog.show({
				controller: 'editEmployeeController',
				templateUrl: '/modules/employee/views/edit_employee.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true,	
				locals:{empDetail:{detail:detail,prevScope:$scope}}				
			}).then(function(answer) {}, function() {});

		};


		/*****************************************
		* Delete employee
		*****************************************/	

		$scope.removeEmployee = function(detail){

			var request={
				url:window.__API_PATH.DELETE_MEMBER,
				method:"DELETE",
				params:{_id:detail._id}
			};
			
			globalRequest.jotCRUD(request).then(function(response){				
				$mdDialog.cancel();
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
			});

		};

		/*****************************************
		* Profile image upload
		*****************************************/	

		$scope.uploadprofileImage = function(files, errFiles) {
			$scope.profile = files;	
			
	        if (files && files.length) {
	            Upload.upload({
	                url: window.__API_PATH.UPLOAD_FILE,
	                type:'post',
	                arrayKey: '',
	                data: {	                    
	                    hotel_id     : hotel._id,
	                    folder_name  : 'profile',	                    
	                    file         : files
	                }
	            }).then(function (response) {
	                $timeout(function () {
	                   console.log(response);
	                   $scope.profileimages = response.data.result[0].filename;
	                   
	                });
	            }, function (response) {
	                if (response.status > 0) {
	                    $scope.errorMsg = response.status + ': ' + response.data;
	                }
	            }, function (evt) {
	                $scope.profileProgress = 
	                    Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
	            });
	        }

	    };


	    $scope.viewDetail = function(){

	    };
		
	}
]);




"use strict";

app.controller('scheduleEmpController', ['$scope','$rootScope','localStorageService','globalRequest','$mdDialog','toastService','scheduledData',
	function($scope,$rootScope,localStorageService,globalRequest,$mdDialog,toastService,scheduledData) {
		var hotel 			= localStorageService.get('hotel');		
		var date         	= new Date(scheduledData.scheduleDate);

		/*
		* Get day list in array
		*/

		$scope.getDay = function(num) {
		    return new Array(num);   
		};

		
		/*****************************************************
		* Populate start and end time on edit time schedule
		*****************************************************/
		
		var matchColumnDate =  date.getDate()+''+(parseInt(date.getMonth())+1) +''+date.getFullYear();
		angular.forEach(scheduledData.empDetail.Scheduledata,function(value,key){
			if(value.shift_filter_date == matchColumnDate)
			{
				$scope.selectVal  = value.schedule_data._id;	
				$scope.start_hour = value.schedule_data.start_time.hour;
				$scope.start_min  = value.schedule_data.start_time.minute;
				$scope.end_hour   = value.schedule_data.end_time.hour;
				$scope.end_min    = value.schedule_data.end_time.minute;			
			}
		});
		

		/*
		* Populate start and end time on change of shift
		*/

		$scope.onChangeSchedule = function(){

			if($scope.shiftTimeList && $scope.shiftTimeList != "custom" && $scope.shiftTimeList != "off")
			{
				var getShift      = JSON.parse($scope.shiftTimeList);
				$scope.start_hour = getShift.start_time[0].hour;
				$scope.start_min  = getShift.start_time[0].minute;
				$scope.end_hour   = getShift.end_time[0].hour;
				$scope.end_min    = getShift.end_time[0].minute;
			}
			
			if($scope.shiftTimeList == "off")
			{
				$scope.start_hour = $scope.start_min = $scope.end_hour= $scope.end_min= '';	
			}
			
		};



		/************************************
		* Add employee schedule data
		*************************************/


		$scope.setSchedule = function(){
			var isSetShift,shiftID;			
			var monthVal 	 = date.getMonth();
			var firstDay     = new Date(date.getFullYear(), monthVal, 1);
			var lastDay      = new Date(date.getFullYear(), monthVal + 1, 0);

			var empData 	 = scheduledData.empDetail;
			var scheduleData = {};
			
			var start_hour = $scope.start_hour;
			var start_min  = $scope.start_min;
			var end_hour   = $scope.end_hour;
			var end_min    = $scope.end_min;

			if($scope.shiftTimeList)
			{
				if($scope.shiftTimeList != "custom" && $scope.shiftTimeList != "off")
				{
					isSetShift   = JSON.parse($scope.shiftTimeList);
					shiftID      = isSetShift._id;
				} else {
					shiftID   = $scope.shiftTimeList;
				}
				
				scheduleData  = {
									_id :shiftID,
									start_time:{hour:start_hour,minute:start_min},
									end_time:{hour:end_hour,minute:end_min},
							    };
			} else {
				scheduleData = '';
			}
			

			var filterString =  date.getDate()+''+(parseInt(date.getMonth())+1) +''+date.getFullYear();		
		
			var SchedRequest = {
		            url:window.__API_PATH.ADD_MEMBER_SCHEDULE,
		            method:"POST",
		            data:{
		            	hotel_id       		:  hotel._id,		
		            	user_id        		:  empData._id,
		            	shift_date     		:  date.getTime(),
		            	shift_filter_date   :  filterString,	            		
		            	schedule_data  		:  scheduleData,		
		            }
		        };
		   
		    globalRequest.jotCRUD(SchedRequest).then(function(response){	
			 	if(response.status == 1)
			 	{
			 		$rootScope.$emit("CallgetSchedule", {firstDay:firstDay,lastDay:lastDay});
			 		$mdDialog.cancel();	

			 		var popup = {"message":response.message,"class":response.class};
					toastService.alert(popup); 
			 	}
			});

		};
		
		
	}
]);
"use strict";

app.controller('schedulerController', ['$scope','$rootScope','localStorageService','globalRequest','$mdDialog','$interval','toastService',
	function($scope,$rootScope,localStorageService,globalRequest,$mdDialog,$interval,toastService) {

		var hotel 			 = localStorageService.get('hotel');
		var date 	   	     = new Date();
		$scope.currentDate   = new Date(); 
		$scope.datesData 	 = {dates : "", monthStartDate : ""};
		$scope.position_list = window.__API_PATH.POSITION;

		/*
		* Get day list in array
		*/
		
		$scope.getDay = function(num) {
		    return new Array(num);   
		};

		/*
		* Get color codes
		*/

		$scope.colorCodes = window.__API_PATH.COLOR_CODE;


		/************************************
		* Get shift timing
		*************************************/		
		globalRequest.getShiftTime();
		

		/************************************
		* Get employee schedule data
		*************************************/	

		$scope.getSchedule = function(fromDate,toDate){

			var from = new Date(new Date(fromDate).getFullYear(),new Date(fromDate).getMonth(),new Date(fromDate).getDate()).getTime();
			var to = new Date(new Date(toDate).getFullYear(),new Date(toDate).getMonth(),new Date(toDate).getDate()).getTime();

			$scope.hideLoader = false;
			var GetRequest =  {
					url:window.__API_PATH.MEMBER_SCHEDULE_DATA,
					method:"GET",
					params:{
						hotel_id    :  hotel._id,
						from_date   :  from,
						to_date     :  to	
					}
				};

			globalRequest.jotCRUD(GetRequest).then(function(response){				
			 	$scope.membersList = response.result;
			 	$scope.hideLoader = true;
			 });
		};


		/**************************************************
		* Make function broadcast to load from anywhere
		***************************************************/

		$rootScope.$on("CallgetSchedule", function(evt,data){
           $scope.getSchedule(data.firstDay,data.lastDay);
        });


		/************************************
		* Blank all field before open form
		*************************************/
		$scope.blank = function(){
			$scope.shift_name = "";		
			$scope.shift_time = "";		
			$scope.ctlr.bgcolor = "";		
			$scope.department_name = "";		
		};

		/**************************************************************************
		* Get last date of week by passing the week number and month start date obj
		***************************************************************************/

		Date.prototype.getWeek = function(monthStart) {
			var onejan = new Date(monthStart);
			return Math.ceil((((this - onejan) / 86400000) + onejan.getDay()+1)/7);
		};

		function getDateRangeOfWeek(monthStart,weekNo){
			var numOfdaysPastSinceLastMonday;
		    var d1 = new Date();
		    numOfdaysPastSinceLastMonday = parseInt(d1.getDay()- 1);
		    d1.setDate(d1.getDate() - numOfdaysPastSinceLastMonday);
		    var weekNoToday = d1.getWeek(monthStart);
		    var weeksInTheFuture = parseInt( weekNo) - parseInt(weekNoToday );
		    d1.setDate(d1.getDate() + parseInt( 7 * weeksInTheFuture ));
		    
		    d1.setDate(d1.getDate() + 6);		    
		    return d1;
		}


		/**************************************************************************
		*
		* Function 
		*
		* To return array of all date by passing startDate and endDate of month
		*
		***************************************************************************/

		var AllDates  = function(startDate, endDate) {

							var dates = [],
							  currentDate = startDate,
							  addDays = function(days) {
							    var date = new Date(this.valueOf());
							    date.setDate(date.getDate() + days);
							    return date;
							  };
							  var i=0;						  

							while (currentDate <= endDate) {
							dates.push(currentDate);
							currentDate = addDays.call(currentDate, 1);
							i++;
							}

							return dates;
						};

		/*********************************************************************
		*
		* Set all data view and employee data on load if dataVAl found empty
		* Call on next and prev button click
		*
		*********************************************************************/

		$scope.UpdateCalenderViewDates 	=	function(calenderCurrentData,nav,countDate){
			
			var monthVal,firstDay,lastDay,year;

			if(calenderCurrentData)
			{	
				date 	= new Date(calenderCurrentData);							
			}	

			if(nav == 'next')
			{
				monthVal = date.getMonth()+1;
			} else if(nav == 'prev') {
				monthVal = date.getMonth()-1;
			} else {
				monthVal = date.getMonth();
			}
			
			firstDay   = new Date(date.getFullYear(), monthVal, 1);
			lastDay    = new Date(date.getFullYear(), monthVal + 1, 0);


			if(countDate == 'today')
			{
				if(!nav)
				{
					firstDay   = new Date();
					lastDay    = new Date();					
				} else {
					$scope.activeRangeMenu = '';
				}

			} else if(countDate){
				var WeeksMonth = firstDay.getMonth()+1;
				var WeeksYear  = firstDay.getFullYear();					
				var lastDateOfWeek = getDateRangeOfWeek(firstDay,countDate);
				lastDay = lastDateOfWeek;					
			}
	

			$scope.datesData.dates        		= AllDates(firstDay,lastDay);
			$scope.datesData.monthStartDate     = firstDay;

			/*
			* Blank calender before load new data 
			* Reinitialize calender data
			*/
			$scope.membersList 	= '';			
			$scope.getSchedule(firstDay,lastDay);
		};

		/**************************************************
		* Set Scheduler on page load
		**************************************************/
		$scope.activeRangeMenu = 2;
		$scope.UpdateCalenderViewDates('','',2);


		/**************************************************
		* Set end date of calender and filter accordingly
		**************************************************/

		$scope.setVeiwRange = function(setDateValue,countDate){

			$scope.activeRangeMenu = countDate;
			$scope.UpdateCalenderViewDates(setDateValue,'',countDate);
			
		};


		/**************************************************
		* Set calender view by date range
		**************************************************/

		$scope.setVeiwRangeByDate = function(){
			$scope.activeRangeMenu = '';
			var scheduleFrom       = $scope.scheduleFrom;
			var scheduleTo  	   = $scope.scheduleTo;

			if(scheduleFrom && scheduleTo)
			{
				$scope.datesData.dates   = AllDates(scheduleFrom,scheduleTo);
				$scope.getSchedule(scheduleFrom,scheduleTo);
			}
			
		};

		/************************************
		* Show user information in popup
		*************************************/

		$scope.showUserInfo = function(memberDetail){
			$mdDialog.show({
					controller: 'showDetailController',
					templateUrl: '/modules/employee/views/display_userinfo.html',
					parent: angular.element(document.body),
					fullscreen: $scope.customFullscreen,
					clickOutsideToClose:true,	
					locals:{empDetail:{detail:memberDetail,prevScope:$scope}}				
				}).then(function(answer) {}, function() {});
		};

		

		/************************************
		* Add shift timing
		*************************************/

		 $scope.addshift = function(){
		 	var shiftTimeRequest = {
		            url:window.__API_PATH.ADD_HOTELSHIFT,
		            method:"POST",
		            data:{
		            	hotel_id        :  hotel._id,		
		            	shift_name      :  $scope.shift_name,
		            	department_name :  $scope.department_name,
		            	bgcolor       	:  $scope.ctlr.bgcolor,
		            	start_time      :  { hour:$scope.start_hour,minute:$scope.start_min},		
		            	end_time        :  { hour:$scope.end_hour,minute:$scope.end_min},			
		            }
		          };
			globalRequest.jotCRUD(shiftTimeRequest).then(function(response){		
			 	$scope.shiftListResult = response;
				$scope.blank();
			 	if(response.status == 1)
			 	{
			 		if(!$scope.shiftList)
			 		{
			 			$scope.shiftList = [];
			 		}
			 		$scope.shiftList.push(response.result);	

			 		/************************************
					* Get shift timing
					*************************************/		
					globalRequest.getShiftTime();
			 	}
			 });
		 };	

		 /*****************************************
		 * Open shifts edit form
		 *****************************************/	

		$scope.openEditshift = function(detail){
				$mdDialog.show({
					controller: 'editshiftController',
					controllerAs: 'ctlr',
					templateUrl: '/modules/employee/views/edit_employee_shift.html',
					parent: angular.element(document.body),
					fullscreen: $scope.customFullscreen,
					clickOutsideToClose:true,	
					locals:{shiftDetail:{detail:detail}}				
				}).then(function(answer) {}, function() {});

		}; 


		/*****************************************
		 * Open shifts edit form
		 *****************************************/	

		$scope.openEmpSchedule = function(scheduleDate,empDetail){
				$mdDialog.show({
					controller: 'scheduleEmpController',
					templateUrl: '/modules/employee/views/schedule_employee.html',
					parent: angular.element(document.body),
					fullscreen: $scope.customFullscreen,
					clickOutsideToClose:true,	
					locals:{scheduledData:{scheduleDate:scheduleDate,empDetail:empDetail}}				
				}).then(function(answer) {}, function() {});

		};

		/*****************************************
		* Delete shift
		*****************************************/	

		$scope.removeshift = function(detail){

			var request={
				url:window.__API_PATH.DELETE_HOTELSHIFTS,
				method:"DELETE",
				params:{_id:detail._id}
			};
			
			globalRequest.jotCRUD(request).then(function(response){				
				$mdDialog.cancel();
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
			});

		};


		/************************************
		* Get department list
		*************************************/			
		
		globalRequest.getDepartments();
		

		/*****************************************
		* Loader icon
		*****************************************/

		var self = this;
	      self.activated = true;
	      self.determinateValue = 30;
	      $interval(function() {

	        self.determinateValue += 1;
	        if (self.determinateValue > 100) {
	          self.determinateValue = 30;
	        }

	      }, 10);
		
	}
]);
"use strict";

app.controller('showDetailController', ['$scope','empDetail',
	function($scope,empDetail) {
		
		/***********************************************
		* Pass edited employee value in current scope
		***********************************************/
		angular.forEach(empDetail.detail,function (value,key) {
		    $scope[key] = value;
		});	
		
		if($scope.profile_image)
		{
			$scope.image = '/images/hotel/'+$scope.hotel_id+'/profile/'+$scope.profile_image;
		} else {
			$scope.image = '/assets/images/default_profile.png';
		}
		
		console.log($scope);
	}
]);




"use strict";

app.filter('employeefilter',function(){
	return function(input,scope){

		if(input)
		{

			var searchEmployee        = scope.searchEmployee;

			if(!searchEmployee){
				return input;
			}

			if(searchEmployee)
			{
				var removeSpaceFromString = searchEmployee.replace(/\s/g,'');			
			}
			input   =   input.filter(function( obj ) {
							var fullName = obj.first_name+obj.last_name;
								if(fullName.match(new RegExp("(" + removeSpaceFromString + ")", "i")))
								{
									return true;
								}							
								
						});
		}
		return input;

	};

});


"use Strict";

app.controller('faqController',['$scope',
	function($scope){

}]);
"use strict";

app.controller('homeController',['$scope',
	function($scope){
		
  		$scope.config={
		     navigation: false,
		     items:1,	     
		     navContainer: '#customNav',
		     pagination: false,
		     rewindNav : true
		 };
		 
	 
}]);
"use strict";

app.directive("owlCarousel", function() {
	return {
		restrict: 'E',
		transclude: false,
		link: function (scope) {
			scope.initCarousel = function(element) {
			  // provide any default options you want
				var defaultOptions = {
				};
				var customOptions = scope.$eval($(element).attr('data-options'));
				// combine the two options objects
				for(var key in customOptions) {
					defaultOptions[key] = customOptions[key];
				}
				// init carousel
				$(element).owlCarousel(defaultOptions);
			};
		}
	};
});
app.directive('owlCarouselItem', [function() {
	return {
		restrict: 'A',
		transclude: false,
		link: function(scope, element) {
		  // wait for the last item in the ng-repeat then call init
			if(scope.$last) {
				scope.initCarousel(element.parent());
			}
		}
	};
}]);
"use strict";

app.controller('checklistCtlr', ['$scope','$rootScope','Upload','$timeout',
	function($scope,$rootScope,Upload,$timeout) {



		/*
		* Default checklist
		*/

		$scope.checkList = window.__API_PATH.DEFAULT_CHECKLIST;


		/**********************************************************
		* Store value of checklist on change to add item in checklist
		**********************************************************/


		var selectedCheckBox = [];	
		$scope.lookup = function (selectedItem, list) {
			if( selectedItem ) {
				selectedCheckBox.push(list.name);
			} else {
				selectedCheckBox = selectedCheckBox.filter(function( obj ) {
				    return obj != list.name;
				});
			}


		};

		/***********************************************************************
		* Store value of checklist on change of checklist checkbox to save items
		***********************************************************************/
		var CheckBoxValue =  [];	
		$scope.storeValue = function(checkListType,currentValue,isCheck,parantValue){


			/**************************
			* Parent item List 
			*************************/

			if(checkListType == 'parentlist')				
			{
				var  parentItem = {
								name   :currentValue,
								sublist:[]
							};

				if(isCheck)
				{
					/*********** Push value on check  *********/

					CheckBoxValue.push(parentItem);		
				} else {

					/*********** Remove value on uncheck  *********/

					CheckBoxValue = CheckBoxValue.filter(function( obj ) {		    
				    	return obj.name != currentValue;
				    });
				}							
				
			}

			/**************************
			* Sub-item List 
			*************************/

			if(checkListType == 'sublist')
			{

				
				var storedSubList =  '';
				angular.forEach(CheckBoxValue,function(value,index){
					if( value.name == parantValue ) {
						storedSubList = value.sublist;
					  	//value.sublist.push(subItem);
					  	if(isCheck)
						{
							/*********** Push subitem on check  *********/

							var subItem = {name:currentValue};
							storedSubList.push(subItem);
						} else {	

							/*********** Remove subitem on uncheck  *********/					
							value.sublist = storedSubList.filter(function( obj ) {	
						    	return obj.name != currentValue;
						    });
						}
					}	               
		        });

			}

			$rootScope.checklist = CheckBoxValue;			

		};


		/*****************************************
		* Add item in checklist
		*****************************************/
		

		$scope.addchecklist = function(itemType){
				
				$scope.itemError = '';
				var storedCheckbox = $scope.checkList;
				var ItemToAdd = '';
				if($scope.listItemName)
				{
					ItemToAdd = $scope.listItemName;
					ItemToAdd 	  = ItemToAdd.replace(/(^[\s]+|[\s]+$)/g, '');
				} else {
					$scope.itemError = 'Please fill the blank teatarea.';
					return false;
				}
			
				var  parentItem = {
								name   :ItemToAdd,
								sublist:[]
							};
				var  subItem = {name:ItemToAdd};	


				if(itemType == 'parentlist')
				{
					if(storedCheckbox.length == 0)
					{
						$scope.checkList.push(parentItem);

					} else {
						var valueFind = false;
						for (var key in storedCheckbox) {
						  if (storedCheckbox.hasOwnProperty(key)) {
						  	if(storedCheckbox[key].name == ItemToAdd)
						  	{
						  		valueFind = true;
						  	}
						  }
						}

						if(!valueFind)
						{
							storedCheckbox.push(parentItem);
						} else {
							$scope.itemError = 'Item already exists.';
							
						}
					}
				}

				if(itemType == 'sublist')
				{

					if( selectedCheckBox.length >0){
						angular.forEach($scope.checkList,function(value,index){	
							 selectedCheckBox.find( function( obj ) { 
								if( obj == value.name ) {
									var storedSublist = value.sublist;
									var valueFind = false;
									for (var key in storedSublist) {
									  if (storedSublist.hasOwnProperty(key)) {
									  	if(storedSublist[key].name == ItemToAdd)
									  	{
									  		valueFind = true;
									  	}
									  }
									}

									if(!valueFind)
									{
										storedSublist.push(subItem);
										
									} else {
										$scope.itemError = 'Subitem already exists for "'+value.name+'".';
										
									}
								  	
								}						  
							});                
			            });
					} else {
						$scope.itemError = 'Please select item.';						
					}

				}
			storedCheckbox = selectedCheckBox;
		};

		$scope.showTextArea = function(btnType){
			$scope.showArea = true;
			$scope.itemType = btnType;

		};
		
	}
]);

"use strict";

app.controller('departmentCtlr', ['$scope','$rootScope','globalRequest',
	function($scope,$rootScope,globalRequest) {
		

		/*****************************************
		* Get department List
		******************************************/

	    globalRequest.getDepartments();

	     /*after click on suggestion list*/                            
	    $scope.callback = function(){	       
	        $scope.deparmentfocus = true;
	         
	    };

	}
]);
"use strict";

app.controller('dueDataCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {

		/*
		*
		* Default Date
		*
		*/
		if(!$rootScope.due_date)
		{
			$rootScope.due_date = new Date(new Date().getTime());
		}

	}
]);

"use strict";

app.controller('editJotCtlr', ['$scope','globalRequest','$rootScope','$mdDialog','jotData','$route','toastService',
	function($scope,globalRequest,$rootScope,$mdDialog,jotData,$route,toastService) {

		
		
		$scope.edit_jot		   		= jotData;		
		$scope.jot_title   			= $scope.edit_jot.jot_title;
		$rootScope.jot_description	= $scope.edit_jot.jot_description;
		$rootScope.jot_members		= $scope.edit_jot.jot_members;
		$rootScope.due_date    		= new Date($scope.edit_jot.due_date);
		$rootScope.priority    		= $scope.edit_jot.priority;
		$rootScope.department  		= $scope.edit_jot.department;
		$rootScope.hotel_room  		= $scope.edit_jot.hotel_room;

	
		/**************************************
		* Edit jot popup
		**************************************/

		$scope.jotQuickEditPopup = function(HtmlName){	
			$mdDialog.show({				
			    templateUrl: '/modules/jot/views/'+HtmlName+'.html',
				multiple: true,
				clickOutsideToClose:true,
				fullscreen: $scope.customFullscreen,				
			}).then(function(answer) {}, function() {});

		};

		/**************************************
		* Open move to dc form
		**************************************/

		$scope.moveDC = function(detail){	
			$mdDialog.show({	
				controller: 'moveDcController',
				controllerAs: 'movectrl',			
			    templateUrl: '/modules/jot/views/move_dc.html',
				multiple: true,
				clickOutsideToClose:true,
				fullscreen: $scope.customFullscreen,
				locals:{Detail:{detail:detail,prevScope:$scope}}				
			}).then(function(answer) {}, function() {});

		};



		/**************************************
		* Change status
		**************************************/

		$scope.changeStatus = function(){
			if($scope.edit_jot.status == 'close')
			{
				$scope.edit_jot.status = 'open';
			} else {
				$scope.edit_jot.status = 'close';
			}

		};
		
		/**************************************
		* Update Jot
		**************************************/

		$scope.saveUpdatedJot = function(){
			$scope.edit_jot.jot_id				= $scope.edit_jot._id;
			$scope.edit_jot.jot_title			= $scope.jot_title;
			$scope.edit_jot.jot_description		= $rootScope.jot_description;
			$scope.edit_jot.jot_members		    = $rootScope.jot_members;
			$scope.edit_jot.due_date    		= new Date($rootScope.due_date).getTime();
			$scope.edit_jot.priority   		    = $rootScope.priority;
			$scope.edit_jot.department 		 	= $rootScope.department;
			$scope.edit_jot.hotel_room 		 	= $rootScope.hotel_room;
		

			var request={
				url:window.__API_PATH.UPDATE_JOT,
				method:"put",
				data:$scope.edit_jot
			};

			globalRequest.jotCRUD(request).then(function(response){		
				var JotType = $scope.edit_jot.jot_type;
				globalRequest.getJotList(JotType); 	
				$mdDialog.cancel();
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
			});
		};

	
		/**************************************
		* Archive Jot
		**************************************/

		$scope.archiveJot = function(){
			var jotid = {jot_id:$scope.edit_jot._id};

			var request={
				url:window.__API_PATH.DELETE_JOT,
				method:"DELETE",
				params:jotid
			};
			
			globalRequest.jotCRUD(request).then(function(response){				
				var JotType = $scope.edit_jot.jot_type;
				globalRequest.getJotList(JotType); 
				$mdDialog.cancel();
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
			});
		};

		/**************************************
		* Close popup
		**************************************/
		$scope.close = function(){
			 $mdDialog.cancel();
		};
		
	}
]).directive('ngConfirmClick', [
        function(){
            return {
                link: function (scope, element, attr) {
                    var msg = attr.ngConfirmClick || "Are you sure?";
                    var clickAction = attr.confirmedClick;
                    element.bind('click',function (event) {
                        if ( window.confirm(msg) ) {
                            scope.$eval(clickAction);
                        }
                    });
                }
            };
    }]);


"use strict";

app.controller("hotelBoardController",['$scope','$rootScope','$routeParams','globalRequest','localStorageService','$location','$mdDialog',
	function($scope,$rootScope,$routeParams,globalRequest,localStorageService,$location,$mdDialog){

		/**********************************************************
	    * Get active hotel data
	    **********************************************************/

		$scope.activeHotelData   = localStorageService.get('hotel');

		/**************************************************
		* Redirect if hotel obj not found in localstorage
		**************************************************/

		if(!$scope.activeHotelData || $scope.activeHotelData == ""){
			$location.path('/dashboard');
			return false;
		}


		/************************************
		* Get department list
		*************************************/			
		
		globalRequest.getDepartments();

		/************************************
		* Get department list
		*************************************/			
		
		globalRequest.getStaff();


		$scope.activetype = $routeParams.type;
		if($routeParams.type)
		{

			/**************************************
			* Get jot list
			**************************************/		
			var JotType = $routeParams.type;
			globalRequest.getJotList(JotType);			
			$scope.BoardsPage = true;
			

		} else {

			/**************************************
			* Get jot count
			**************************************/	
			globalRequest.getJotCount();
			$scope.BoardsPage = false;
		}


		/**************************************
		* Edit jot popup
		**************************************/

		$scope.jotEditPopup = function(jotData){			
			$mdDialog.show({
				controller: 'editJotCtlr',
				templateUrl: '/modules/jot/views/edit_jot.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				locals: {jotData:jotData}
			});
		};

		/**************************************
		* Open comment popup
		**************************************/

		$scope.openComments = function(jotData){			
			$mdDialog.show({
				controller: 'jotCommentCtlr',
				templateUrl: '/modules/jot/views/jot_comments.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				locals: {jotData:jotData}
			});
		};

		
	}
]);
"use strict";

app.controller('iconCtlr', ['$scope','$rootScope','Upload','$timeout','localStorageService',
	function($scope,$rootScope,Upload,$timeout,localStorageService) {


		/*****************************************
		* Jot image upload
		*****************************************/
		$rootScope.issueImages = '';
		$scope.uploadFiles = function(files, errFiles) {
			var hotel         = localStorageService.get('hotel');
			$rootScope.files  = files;	
			var directoryName = $rootScope.directory;
			
	        if (files && files.length) {
	            Upload.upload({
	                url: window.__API_PATH.UPLOAD_FILE,
	                type:'post',
	                arrayKey: '',
	                data: {	                    
	                    hotel_id     : hotel._id,
	                    folder_name  : directoryName,	                    
	                    file         : files
	                }
	            }).then(function (response) {
	                $timeout(function () {
	                   var result = response.data.result;
	                   var uploadedImagesName = []; 
	                    angular.forEach(result, function(data) {				
				            if(data.status){
				            	uploadedImagesName.push(data);
				            }
				        });
				        $rootScope.issueImages = uploadedImagesName;
	                });
	            }, function (response) {
	                if (response.status > 0) {
	                    $scope.errorMsg = response.status + ': ' + response.data;
	                }
	            }, function (evt) {
	                $rootScope.progress = 
	                    Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
	            });
	        }

	    };

	    /*****************************************
		* Open staff list
		*****************************************/

	    $scope.openMemberList	=	function(userName){	    	
	    	if($rootScope.clickopen)
	    	{
	    		$rootScope.clickopen = false;	    		
	    	} else {
	    		$rootScope.clickopen = true;
	    	}	    	
	    };


	}
]);
"use strict";

app.controller('issueCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {

		/*
		*
		* Set default jot type
		*
		*/	
		$rootScope.jot_type = 'issue';
		$rootScope.directory = 'issue';	

	}
]);

"use strict";

app.controller('jotCommentCtlr', ['$scope','globalRequest','$rootScope','$mdDialog','jotData','$route','toastService','localStorageService','Upload','$timeout',
	function($scope,globalRequest,$rootScope,$mdDialog,jotData,$route,toastService,localStorageService,Upload,$timeout) {

		var userDetail = localStorageService.get('user');	
		
		
		$scope.edit_jot		   		= jotData;		
		$scope.jot_title   			= $scope.edit_jot.jot_title;
		$rootScope.jot_description	= $scope.edit_jot.jot_description;
		$rootScope.directory  		= jotData.jot_type;
		$rootScope.jot_members		= $scope.edit_jot.jot_members;
		$rootScope.due_date    		= new Date($scope.edit_jot.due_date);
		$rootScope.priority    		= $scope.edit_jot.priority;
		$rootScope.department  		= $scope.edit_jot.department;
		$rootScope.issueImages      = '';
		$rootScope.files      		= '';
		$rootScope.progress      	= -1;
		$scope.commentImages 		= '';



		console.log(jotData);
		$scope.submitComment = function(){
			var commentRequest={
				url:window.__API_PATH.ADD_COMMENT,
				method:"POST",
				data:{					
					hotel_id 			: jotData.hotel_id, 
					jot_id 				: jotData._id, 
					user_id 			: userDetail._id, 
					attachment 			: $scope.commentImages, 
					post_date 			: new Date().getTime(), 
					message 			: $scope.message, 
				}
			};

			globalRequest.jotCRUD(commentRequest).then(function(response){	
				getComments();		
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);

				$scope.commentImages = [];
				$scope.message 		 = "";
				$scope.files 		 = "";
			});
		};

		/**************************************
		* Clear comment
		**************************************/

		$scope.cancelComment = function(){
			$scope.commentImages = [];
			$scope.message 		 = "";
			$scope.files 		 = "";
		};
		


		/**************************************
		* Get comments
		**************************************/

		function getComments(){

			var getCommentRequest={
				url:window.__API_PATH.GET_COMMENT,
				method:"GET",
				params:{					
					hotel_id 			: jotData.hotel_id, 
					jot_id 				: jotData._id
				}
			};
			globalRequest.jotCRUD(getCommentRequest).then(function(response){
				$scope.commentList = response.result;	
	
			});
		}
		getComments();


		/*****************************************
		* Jot image upload
		*****************************************/
		$scope.commentImages = '';
		$scope.uploadFiles = function(files, errFiles,uploadType) {
			var folder;
			if(uploadType == "comment")
			{
				$scope.files  = files;
				folder   	  = 'comments';
			}

			if(uploadType == "sidebar")
			{
				folder   	  = jotData.jot_type;
			}

				
			
	        if (files && files.length) {
	            Upload.upload({
	                url: window.__API_PATH.UPLOAD_FILE,
	                type:'post',
	                arrayKey: '',
	                data: {	                    
	                    hotel_id     : jotData.hotel_id,
	                    folder_name  : folder,	                    
	                    file         : files
	                }
	            }).then(function (response) {
	                $timeout(function () {
	                   var result = response.data.result; 
						if(uploadType == "comment")
						{	
							var uploadedImagesName = []; 					
		                    angular.forEach(result, function(data) {				
					            if(data.status){
					            	uploadedImagesName.push(data);
					            }
					        });
					        $scope.commentImages = uploadedImagesName;
				    	}

				    	if(uploadType == "sidebar")
						{	

							angular.forEach(result, function(data) {				
					            if(data.status){
					            	jotData.image = jotData.image.concat(data);
					            }
					        });
							jotData.image = jotData.image.filter(function(key){
									if(key){ return key;}
							});	
							updateJotMethod({image:jotData.image});
				    	}

	                });
	            }, function (response) {
	                if (response.status > 0) {
	                    $scope.errorMsg = response.status + ': ' + response.data;
	                }
	            }, function (evt) {
	                $scope.progress = 
	                    Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
	            });
	        }

	    };



	    /**************************************
		* Save comment
		**************************************/

		function updateJotMethod(paramArgs){

			var JotRequest={
				url:window.__API_PATH.UPDATE_JOT,
				method:"put",
				data:{
					jot_id 			: jotData._id					
				}
			};	
			Object.assign(JotRequest.data, paramArgs);

			globalRequest.jotCRUD(JotRequest).then(function(response){			
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);

				var JotType = jotData.jot_type;
				globalRequest.getJotList(JotType); 

				$rootScope.issueImages   = '';
				$rootScope.files   		 = '';
				$rootScope.progress      = -1;
			});
		}

		/**************************************
		* Cancel description
		**************************************/

		$scope.cancelDesc = function(){

			$rootScope.issueImages   = '';
			$rootScope.files   		 = '';
			$rootScope.progress      = -1;

		};

		/**************************************
		* Watch file upload
		**************************************/

		$rootScope.$watch('issueImages',function(){			
			jotData.image = jotData.image.concat($rootScope.issueImages);	
		});

		/**************************************
		* Delete attachment
		**************************************/

		$scope.deleteAttachment = function(imageHashKey){


			jotData.image = jotData.image.filter(function(key){
				return key.$$hashKey != imageHashKey;
			});

			var imageRequest = {
					image           : jotData.image
				};

				console.log(jotData.image);
				console.log(imageRequest);

			updateJotMethod(imageRequest);
		};



		/**************************************
		* Update description
		**************************************/

		$scope.saveDescription = function(){
			jotData.image = jotData.image.filter(function(key){
								if(key){ return key;}
							});

			var descRequest = {
					jot_description : $rootScope.jot_description,
					image           : jotData.image
				};
			updateJotMethod(descRequest);
		};

		/**************************************
		* Update member
		**************************************/

	    $scope.saveMember = function(){
	    	var memberRequest = {jot_members : $rootScope.jot_members};
			updateJotMethod(memberRequest);

	    };

	    /**************************************
		* Update due date
		**************************************/

	    $scope.saveDueDate = function(){
	    	var memberRequest = {due_date : new Date($rootScope.due_date).getTime()};
			updateJotMethod(memberRequest);

	    };

	    /**************************************
		* Update department
		**************************************/

	    $scope.saveDept = function(){
	    	var memberRequest = {department : $rootScope.department};
			updateJotMethod(memberRequest);
	    };

	    /**************************************
		* Update department
		**************************************/

	    $scope.savePriority = function(){
	    	var memberRequest = {priority : $rootScope.priority};
			updateJotMethod(memberRequest);
	    };
			

	    /**************************************
		* Close popup
		**************************************/

		$scope.close = function(){
			 $mdDialog.cancel();
		};
		
	}
]);
"use strict";

app.controller('jotPopupCtrl', ['$scope','$rootScope','$mdDialog','ActivateTab','globalRequest','localStorageService',
	function($scope,$rootScope,$mdDialog,ActivateTab,globalRequest,localStorageService) {	
		/*
		* Activate tab
		*/
		$scope.currentNavItem   = ActivateTab;	

		/**********************************************************
	    * Get active hotel data
	    **********************************************************/

		$scope.activeHotelData   = localStorageService.get('hotel');

		/**********************************************************
	    * Get staff list
	    **********************************************************/

		globalRequest.getStaff();

		/************************************************
		* Get list of Jot types selected by current user
		*************************************************/

		$scope.boards = $scope.activeHotelData.jot_types;


		/*
		* Function
		*
		* Close popup of new hotel add.
		*
		*/
		$scope.close = function(){
			 $mdDialog.cancel();
		};
	}
]);

"use strict";

app.controller('jotQuickCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {	
			
			/*
			*
			* Set jot type list
			*
			*/
			$rootScope.jot_type  = 'quick';
			$rootScope.directory = 'quick';

			$scope.jotSelect = function(event,value){
				$rootScope.jot_type = value;
			};
	}
]);

"use strict";

app.controller('messagesCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {	
		/*
		*
		* Set default jot type
		*
		*/	
		$rootScope.jot_type  = 'messages';
		$rootScope.directory = 'messages';	
	}
]);

"use strict";

app.controller('moveDcController', ['$scope','$rootScope','localStorageService','globalRequest','Detail','$mdDialog','Upload','$timeout','toastService',
	function($scope,$rootScope,localStorageService,globalRequest,Detail,$mdDialog,Upload,$timeout,toastService) {
		var hotel = localStorageService.get('hotel');

		/***********************************************
		* Pass edited employee value in current scope
		***********************************************/

		angular.forEach(Detail.detail,function (value,key) {

		    if(key == 'department'){
				$rootScope.department = value;
			} else if(key == 'image'){
				$scope.filesData = value;
			} else {
				$scope[key] = value;
			}
		});	

	

		/**********************************************************
	    * Item tags 
	    **********************************************************/

		var self = this;
	    self.readonly = false;	    
	    self.itemTag = [];
	    self.MovItemTagModel = angular.copy(self.itemTag);
	    self.editableitemTag = angular.copy(self.itemTag);
	    self.tags = [];	    
	    self.newVeg = function(chip) {
	      return {
	        name: chip,
	        type: 'unknown'
	      };
	    };


		/************************************
		* Edit document
		*************************************/		

		$scope.moveToDC = function(){	
	
			var request = {
		            url:window.__API_PATH.MOVE_DOCUMENT,
		            method:"POST",
		            data:{
		            	hotel_id      	   		:  hotel._id,
		            	document_name   		:  $scope.mov_document_name,
		            	department      		:  $rootScope.department,
		            	tags        			:  $scope.movectrl.MovItemTagModel,
		            	document_description    :  $scope.mov_document_description,
		            	files       		    :  $scope.filesData,
		            	upload_date				:  new Date().getTime(),
		            	jot_id					:  $scope._id,
		            	jot_type				:  $scope.jot_type
		            }
		          };

			globalRequest.jotCRUD(request).then(function(response){
				
			 	$scope.docMoveResult = response;
			 	if(response.status ==1)
			 	{
			 		$mdDialog.cancel();
			 		var popup = {"message":response.message,"class":response.class};
					toastService.alert(popup);
			 	}

			 });

		};

		/************************************
		* Remove files by index
		*************************************/	

		$scope.removeImageIndex = function(fData){
			$scope.filesData = $scope.filesData.filter(function( obj ) {
			    return obj.filename != fData.filename;
			});

		};

	}
]);
"use strict";

app.controller('noteCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {	
		/*
		*
		* Set default jot type
		*
		*/	
		$rootScope.jot_type  = 'note';
		$rootScope.directory = 'note';	
	}
]);

"use strict";

app.controller('priorityCtlr', ['$scope','$rootScope','$mdDialog',
	function($scope,$rootScope) {

		/*
		*
		* Set jot priority type on click
		*
		*/

		$scope.jotPriorityList 	= window.__API_PATH.JOT_PRIORITY;
		if(!$rootScope.priority)
		{
			$rootScope.priority = window.__API_PATH.JOT_PRIORITY[0].name;
		}		

		$scope.selectPriority = function(event,value){
			 $rootScope.priority 	= value;
		};

	}
]);

"use restrict";

app.controller('roomCtlr',['$scope','$rootScope',function($scope,$rootScope){

}]);
"use strict";

app.controller('staffCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {
	     
	     /*after click on suggestion list*/                                                            
	    $scope.callbackStaff = function(){
	            $scope.staffFocus = true;        
	    };
	}
]);

"use strict";

app.controller('taskCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {
		/*
		*
		* Set default jot type
		*
		*/	
		$rootScope.jot_type  = 'task';
		$rootScope.directory = 'task';		
	
	}
]);

"use strict";

app.controller('taskDatepickerCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {	


		/*
		* Get day list in array
		*/
		
		$scope.getDay = function(num) {
		    return new Array(num);   
		};

		/*
		* Make task pattern
		*/
		$scope.getMonth = window.__API_PATH.MONTH;
		$scope.patterns = window.__API_PATH.RECURRING_PATTERN;
		$scope.weeks    = window.__API_PATH.WEEK_NAME;
		$rootScope.selectedDays = [];

		 
		/*
		* Show/Hide pattern
		*/

		$scope.patternShow = function(pattern){
			$rootScope.selectedPattern = pattern.id;		
			$scope.selectedPatternDesc = pattern.description;	
	        $rootScope.selectedDays = [];

	        if(pattern.id == 'daily' || pattern.id == 'weekly')
			{	
				/***** Auto check all week value *****/	
				
				angular.forEach($scope.weeks, function (item) {
					if(pattern.id == 'daily')
					{
						item.Selected = true;	
						$rootScope.selectedDays.push(item.value);
					} else {
						item.Selected = false;
						$rootScope.selectedDays = [];
					}		            
		            
		        });				
				
			}
			
			

		};		

		/*
		* Store pattern on temp variable
		*/

		  
		  $scope.toggleWeek = function(selected,weekValue) {
			  var index = $rootScope.selectedDays.indexOf(weekValue);		 
			  if (index > -1) 
			  {
				$rootScope.selectedDays.splice(index, 1);
			  }
			  else
			  {
			    $rootScope.selectedDays.push(weekValue);
			  }
			  
		  };
				
	}
]);

"use strict";

app.directive('departmentypeahead', ['$compile', '$timeout','replaceOccurence', function($compile, $timeout,replaceOccurence) {

    return {
        restrict: 'A',
        transclude: true,
        scope: {
            ngModel: '=',
            departmentypeahead: '=',
            departmenttypeaheadCallback: "="
        },
        link: function(scope, elem, attrs) {
          console.log(scope.enablefilter);
            var template = '<div class="dropdown suggestions_list" ng-show="enabledepartmentFilter"><ul class="" style="display:block;" ng-hide="!ngModel.length || !filitered.length || selected"><li ng-repeat="item in filitered = (departmentypeahead | filterdepartment:this) track by $index" ng-click="click(item)" style="cursor:pointer" ng-class="{active:$index==active}" ng-mouseenter="mouseenter($index)"><a>{{item.department_name}} ({{item.abbreviation}})</a></li></ul></div>';

            elem.bind('blur', function() {
                $timeout(function() {
                    scope.selected = true;
                }, 100);
            });

            /*****************************************
            * Navigate list item on mouse key
            ******************************************/

            elem.bind("keydown", function($event) {

                scope.enabledepartmentFilter = true;
                if($event.keyCode == 38 && scope.active > 0) { 
                    scope.active--;
                    scope.$digest();
                } else if($event.keyCode == 40 && scope.active < scope.filitered.length - 1) {
                    scope.active++;
                    scope.$digest();
                } else if($event.keyCode == 13) {
                    scope.$apply(function() {
                        scope.click(scope.filitered[scope.active]);
                    });
                }
            });

            scope.click = function(item) {
              var replaceString = scope.ngModel;
        			var replaceWord   = scope.matchWord;
              replaceWord       = replaceWord.split('#');
              replaceWord       = '#'+replaceWord[1];

        			var selectedValue = "#"+item.abbreviation;

    
        			var replacedValue = replaceOccurence.replaceAll(replaceString,replaceWord, selectedValue);  

        			scope.ngModel = replacedValue;
        			scope.selected = item;

              if(scope.departmenttypeaheadCallback) {
                    scope.departmenttypeaheadCallback(item);
              }
              elem[0].blur();
            };

            scope.mouseenter = function($index) {
                scope.active = $index;
            };

            scope.$watch('ngModel', function(input) {
            	
				        if(scope.selected && scope.selected.department_name == input) {
                	return;
                }
                scope.active = 0;
                scope.selected = false;
            });
            elem.after($compile(template)(scope));
        }
    };
}]).directive('focusDepartment', function($timeout, $parse) {
      return {
          
          link: function(scope, element, attrs) {
              var model = $parse(attrs.focusMe);
              scope.$watch(function(value) {
                     if(value.deparmentfocus)
                     {            
                      $timeout(function() {                        
                          element[0].focus();
                      });
                      scope.deparmentfocus = false;
                     }
              });
          }
      };
    });

"use strict";

app.directive('iconstafflistsuggestion', ['$compile', '$timeout','$rootScope',function($compile, $timeout,$rootScope) {

    return {
        restrict: 'A',
        transclude: true,
        scope: {
            ngModel: '=',
            iconstafflistsuggestion: '=',
            iconstaffsuggestionCallback: "="
        },
        link: function(scope, elem, attrs) {
              $rootScope.clickopen = false;
              var template = '<ul class="" style="display:block;"><li ng-repeat="item in filitered = (iconstafflistsuggestion | filter:$root.filtermember) track by $index"  style="cursor:pointer" ng-class="{active:$index==active}" ng-click="click(item)" ng-mouseenter="mouseenter($index)"><a>{{item.first_name}} {{item.last_name}}({{item.user_name}})</a></li></ul>';

              elem.bind('blur', function() {
                  $timeout(function() {
                      scope.selected = true;
                  }, 100);
              });

              /*****************************************
              * Navigate list item on mouse key
              ******************************************/

              elem.bind("keydown", function($event) {
                 
                  if($event.keyCode == 38 && scope.active > 0) { 
                      scope.active--;
                      scope.$digest();
                  } else if($event.keyCode == 40 && scope.active < scope.filitered.length - 1) {
                      scope.active++;
                      scope.$digest();
                  } else if($event.keyCode == 13) {
                      scope.click(scope.filitered[scope.active]);
                  }
              });

              /***************************************************
              * Replace word with selected suggestion list item
              ***************************************************/

              scope.click = function(item) {
                
                var username  = item.user_name;
                    username  = username.trim();                
                var appendValue = "@"+username+" ";
                console.log(1);
                console.log(appendValue);
                $rootScope.$broadcast('addUserNameAtMousePosition',appendValue);
                $rootScope.clickopen = false;
                $rootScope.filtermember = '';
              };

              /*********************************************
              * Set index on mouse click on list
              **********************************************/

              scope.mouseenter = function($index) {
                  scope.active = $index;
              };

              scope.$watch('ngModel', function(input) {
                
                  if(scope.selected && scope.selected.user_name == input) {
                        return;
                  }
                  scope.active = 0;
                  scope.selected = false;
              });

            /*********************************************
            * Append template under element
            **********************************************/
            elem.after($compile(template)(scope));                       
        }
    };
}]);
"use strict";

app.directive('textareastaffsuggestion', ['$compile', '$timeout','$rootScope','replaceOccurence', function($compile, $timeout,$rootScope,replaceOccurence) {

    return {
        restrict: 'A',
        transclude: true,
        scope: {
            ngModel: '=',
            textareastaffsuggestion: '=',
            textareadepartmentsuggestion: '=',
            textareastaffsuggestionCallback: "="
        },
        link: function(scope, elem, attrs) {
           
              var template = '<div class="dropdown suggestions_list" ng-show="enableDescFilter"><ul class="" style="display:block;" ng-hide="!ngModel.length || !filitered.length || selected"><li ng-repeat="item in filitered = (textareastaffsuggestion | filterstaffJotDesc:this) track by $index"  style="cursor:pointer" ng-class="{active:$index==active}" ng-click="click(item)" ng-mouseenter="mouseenter($index)"><a>{{item.first_name}} {{item.last_name}}({{item.user_name}})</a></li></ul></div>    <div class="dropdown suggestions_list" ng-show="enableDescFilter"><ul class="" style="display:block;" ng-hide="!ngModel.length || !descFilitered.length || selected"><li ng-repeat="item in descFilitered = (textareadepartmentsuggestion | descDepartmentFilter:this) track by $index" ng-click="click(item)" style="cursor:pointer" ng-class="{active:$index==active}" ng-mouseenter="mouseenter($index)"><a>{{item.department_name}} ({{item.abbreviation}})</a></li></ul></div>';

              elem.bind('blur', function() {
                  $timeout(function() {
                      scope.selected = true;
                  }, 100);
              });

              /*****************************************
              * Navigate list item on mouse key
              ******************************************/

              elem.bind("keydown", function($event) {
                scope.enableDescFilter = true;
                

                if($event.keyCode == 38 && scope.active > 0) { 
                    scope.active--;
                    scope.$digest();
                } else if($event.keyCode == 40 ){
                   
                  /********** For user list  ***********/
                   if(scope.filitered)
                    {
                      if(scope.active < scope.filitered.length - 1)
                      {
                        scope.active++;
                        scope.$digest();
                      }               
                    }

                    /********** For department list  ***********/

                    if(scope.descFilitered)
                    {
                       if(scope.active < scope.descFilitered.length - 1)
                        {
                          scope.active++;
                          scope.$digest();
                        }
                    }
                    
                } else if($event.keyCode == 13) { 

                    /********** For user list  ***********/                 
                    if(scope.filitered){
                      scope.$apply(function() {
                          scope.click(scope.filitered[scope.active]);
                      });
                    }
                    /********** For department list  ***********/
                     if(scope.descFilitered){
                        scope.$apply(function() {
                            scope.click(scope.descFilitered[scope.active]);
                        });
                      } 


                }

              });

              /***************************************************
              * Replace word with selected suggestion list item
              ***************************************************/

              scope.click = function(item) {
                var replaceString     = scope.ngModel;
          			var replaceWord       = scope.matchWord;
                var selectedValue;
                /********** For user list  ***********/
                if(scope.filitered)
                {
                  replaceWord           = replaceWord.split('@');
                  replaceWord           = '@'+replaceWord[1];
          			  selectedValue         = "@"+item.user_name;
                }

                /********** For department list  ***********/
                if(scope.descFilitered)
                {    
                  replaceWord           = replaceWord.split('#');
                  replaceWord           = '#'+replaceWord[1];
                  selectedValue     = "#"+item.abbreviation;
                }

          			var replacedValue     = replaceOccurence.replaceAll(replaceString,replaceWord, selectedValue);
                  
          				scope.ngModel = replacedValue;
          				scope.selected = item;


                  scope.$watch(item, function(input) {
                      $rootScope.descFocus = true; 
                   });

                  /*if(scope.textareastaffsuggestionCallback) {
                      scope.textareastaffsuggestionCallback(item);
                  }*/
                  elem[0].blur();
              };

              /*********************************************
              * Set index on mouse click on list
              **********************************************/

              scope.mouseenter = function($index) {
                  scope.active = $index;
              };

              scope.$watch('ngModel', function(input) {
              	
      				    if(scope.selected && scope.selected.user_name == input) {
                      	return;
                  }
                  scope.active = 0;
                  scope.selected = false;
              });

            /*********************************************
            * Append template under element
            **********************************************/
            elem.after($compile(template)(scope));

            /*********************************************
            * Add user name on click user suggestion list
            **********************************************/

            $rootScope.$on('addUserNameAtMousePosition', function(e, val) {
                var domElement = elem[0];

                if (document.selection) {
                  domElement.focus();
                  var sel = document.selection.createRange();
                  sel.text = val;
                  $timeout(function() {                        
                      domElement.focus();
                  });
                  
                } else if (domElement.selectionStart || domElement.selectionStart === 0) {
                  var startPos = domElement.selectionStart;
                  var endPos = domElement.selectionEnd;

                  domElement.value = domElement.value.substring(0, startPos) + val + domElement.value.substring(endPos, domElement.value.length);

                  $rootScope.jot_description = domElement.value;

                  domElement.selectionStart = startPos + val.length;
                  domElement.selectionEnd = startPos + val.length;
                  $timeout(function() {                        
                      domElement.focus();
                  });
                } else {
                  
                  domElement.value += val;       
                  $rootScope.jot_description = domElement.value;

                  $timeout(function() {                        
                      domElement.focus();
                  });
                }

              }); 

            
        }
    };
}]).directive('focusDesc', function($timeout, $parse,$rootScope) {
      return {          

          link: function(scope, element, attrs) {

              var model = $parse(attrs.focusMe);
              $rootScope.$watch(function(value) {
                     if(value.descFocus)
                     {            
                      $timeout(function() {                        
                          element[0].focus();
                          $rootScope.descFocus = '';
                      });                      
                     }
              });
          }
      };
  });
"use strict";

app.directive('jotFormSubmitDirectives', function($timeout, $parse,$rootScope, $mdDialog,toastService,globalRequest,localStorageService,$routeParams) {
      return {
          
          link: function($scope, element, attrs) {

            /***************************************************
            * Prevent form submit on enter key
            ***************************************************/
            element.bind("keydown", function($event) {
                 if($event.keyCode == 13)
                 {
                  $event.preventDefault();
                 }
              });
                

              /*
              * Blank field before open form
              */

              $rootScope.priority = $rootScope.due_date = $rootScope.department =  $rootScope.jot_members = $rootScope.department = $rootScope.taskTime = $rootScope.start_recurring_date = $rootScope.end_recurring_date = $rootScope.jot_description = $rootScope.files = $rootScope.jot_title  =  '';
              $rootScope.progress = -1;
                           
                

                /******************************************************************
                ||  Create jot 
                ******************************************************************/

              $scope.createJot = function(){

                  /*console.log($rootScope);
                  console.log($rootScope.selectedPattern);
                  return false;*/
                  

                  /**
                  ||  Start task Jot Data json 
                  **/

                  var task = '';
                  if($rootScope.taskTime == 'onetime')
                  {
                     task = {
                      type: 'onetime',
                      date: new Date($rootScope.onetime_date).getTime()
                    };
                  } 

                  if($rootScope.taskTime == 'recurring'){

                    var pattern = '';
                    if($rootScope.selectedPattern == 'weekly')
                    {
                       pattern = {
                              type : $rootScope.selectedPattern,
                              days : $rootScope.selectedDays,
                              
                             };
                    } 


                    if($rootScope.selectedPattern == 'yearly')
                    {
                       pattern = {
                              type : $rootScope.selectedPattern,
                              month: $rootScope.yealy_month,
                              date : $rootScope.yearly_day      
                             };
                    } 


                    if($rootScope.selectedPattern == 'monthly')
                    {
                       pattern = {
                              type : $rootScope.selectedPattern,
                              date : $rootScope.monthly_recurring_date
                             };
                    }

                    if($rootScope.selectedPattern == 'daily')
                    {
                      pattern = {
                              type : $rootScope.selectedPattern,
                              days : $rootScope.selectedDays
                             };
                    }

                     task = {
                      type       : 'recurring',
                      start_date : new Date($rootScope.start_recurring_date).getTime(),
                      end_date   : new Date($rootScope.end_recurring_date).getTime(),
                      pattern: pattern
                    };
                  }

                  
                  /*******************************
                  ||  End task Jot Data json 
                  *******************************/

                  $scope.message = ' ';
                  var hotel = localStorageService.get('hotel');
                  
                  var jotDataArray = {
                      jot_title           : $rootScope.jot_title,
                      jot_description     : $rootScope.jot_description,
                      jot_members         : $rootScope.jot_members,
                      priority            : $rootScope.priority,
                      hotel_id            : hotel._id,
                      jot_type            : $rootScope.jot_type,
                      hotel_room          : $rootScope.hotel_room,
                      due_date            : new Date($rootScope.due_date).getTime(),
                      department          : $rootScope.department,                      
                      checklist           : $rootScope.checklist,  
                      image               : $rootScope.issueImages,
                      task_type           : task,
                      status              : 'open'
                  };

                 /* console.log(jotDataArray);
                  return false;*/

                  var request={
                    url:window.__API_PATH.CREATE_JOT,
                    method:"POST",
                    data:jotDataArray
                  };
                  
                  globalRequest.jotCRUD(request).then(function(response){
                   
                    if(response.status == 1)
                    {
                      var JotType = $routeParams.type;
                      globalRequest.getJotList(JotType);
                      $mdDialog.cancel();
                      var popup = {"message":response.message,"class":"success"};
                      toastService.alert(popup);
                    }
                    
                  });

                };


                /*
                *
                * Set jot priority type on click
                *
                */

                $scope.jotPriorityList  = window.__API_PATH.JOT_PRIORITY;
                $scope.jot_priority   = $scope.jotPriorityList[0].name;

                $scope.selectPriority = function(event,value){
                   $scope.jot_priority = value;
                };

                
          }
      };
    });

"use strict";
app.directive('jotTemplate', ['$rootScope',function($rootScope){
	return {
		scope:{jotTemplate:'='},
		template:'<span ng-include="template"></span>',
		link: function(scope,ele){

			function isJSON(str) {
			    try {
			        JSON.parse(str);
			    } catch (e) {
			        return false;
			    }
			    return true;
			}	
			var templateData;		
			scope.$watch('jotTemplate', function(templateName){
				
				if (isJSON(templateName))
				{
				    templateData = JSON.parse(templateName);
				}else{					
				    templateData = templateName;
				}
				
				scope.template='/modules/'+templateData.directory+'/views/'+templateData.id+'.html';
				
				$rootScope.activeNav = templateData.id;
			});

		}
	};
}]);
"use strict";

app.directive('stafftypeahead', ['$compile', '$timeout','replaceOccurence', function($compile, $timeout,replaceOccurence) {

    return {
        restrict: 'A',
        transclude: true,
        scope: {
            ngModel: '=',
            stafftypeahead: '=',
            stafftypeaheadCallback: "="
        },
        link: function(scope, elem, attrs) {

            var template = '<div class="dropdown suggestions_list" ng-show="enableStaffFilter"><ul class="" style="display:block;" ng-hide="!ngModel.length || !filitered.length || selected"><li ng-repeat="item in filitered = (stafftypeahead | filterstaff:this) track by $index"  style="cursor:pointer" ng-class="{active:$index==active}" ng-click="click(item)" ng-mouseenter="mouseenter($index)"><a>{{item.first_name}} {{item.last_name}}({{item.user_name}})</a></li></ul></div>';

            elem.bind('blur', function() {
                $timeout(function() {
                    scope.selected = true;
                }, 100);
            });

            /*****************************************
            * Navigate list item on mouse key
            ******************************************/

            elem.bind("keydown", function($event) {

                scope.enableStaffFilter = true;
                if($event.keyCode == 38 && scope.active > 0) { 
                    scope.active--;
                    scope.$digest();
                } else if($event.keyCode == 40 && scope.active < scope.filitered.length - 1) {
                    scope.active++;
                    scope.$digest();
                } else if($event.keyCode == 13) {

                    scope.$apply(function() {
                        scope.click(scope.filitered[scope.active]);
                    });
                }
            });

            scope.click = function(item) {
              
              var replaceString = scope.ngModel;
        			var replaceWord   = scope.matchWord;
              replaceWord       = replaceWord.split('@');
              replaceWord       = '@'+replaceWord[1];
        			var selectedValue = "@"+item.user_name;
              
        			var replacedValue = replaceOccurence.replaceAll(replaceString,replaceWord, selectedValue);             
              
      				scope.ngModel = replacedValue;
      				scope.selected = item;

                if(scope.stafftypeaheadCallback) {
                    scope.stafftypeaheadCallback(item);
                }
                elem[0].blur();
            };

            scope.mouseenter = function($index) {
                scope.active = $index;
            };

            scope.$watch('ngModel', function(input) {
            	
				if(scope.selected && scope.selected.user_name == input) {
                	return;
                }
                scope.active = 0;
                scope.selected = false;
            });
            elem.after($compile(template)(scope));
        }
    };
}]).directive('focusStaff', function($timeout, $parse) {
      return {
          
          link: function(scope, element, attrs) {
              var model = $parse(attrs.focusMe);
              scope.$watch(function(value) {
                     if(value.staffFocus)
                     {            
                      $timeout(function() {                        
                          element[0].focus();
                      });
                      scope.staffFocus = false;
                     }
              });
          }
      };
    });

"use strict";

app.filter("filterdepartment", function(cursorPosition) {


         return function(input,scope) {
         	
         	var text     = document.getElementById("department");
			var caretPos = cursorPosition.GetCaretPosition(text);
            var word     = cursorPosition.ReturnWord(text.value, caretPos);

            var detectUserName = word.match(/\#[a-z]+/gmi);
			var countAtRate    = word.match(/\#/gm);
		
			if(detectUserName && countAtRate.length == 1)
			{
				var searchedString 	= [];
				if(word.substring(0, 1) == '#')
				{
					var removeHash = word.split("#");
					removeHash = removeHash[1];
					scope.matchWord = word;						
					angular.forEach(input,function(value,key){
						var listedDepartment = value.department_name;
						listedDepartment     = listedDepartment.toLowerCase();
						removeHash           = removeHash.toLowerCase();

						if(listedDepartment.startsWith(removeHash))
						{						
							searchedString.push(value);
						}
					});	
				}			
				return searchedString;
			}
			
         };
});


app.filter("filterstaff", function(cursorPosition) {

         return function(input,scope) {

         	var text     = document.getElementById("staff");
			var caretPos = cursorPosition.GetCaretPosition(text);
            var word     = cursorPosition.ReturnWord(text.value, caretPos);

            var detectUserName = word.match(/\@[a-z]+/gmi);
			var countAtRate    = word.match(/\@/gm);
			
			if(detectUserName && countAtRate.length == 1)
			{
				var searchedString 	= [];
				if(word.substring(0, 1) == '@')
				{
					var removeAtRate = word.split("@");
					
					removeAtRate = removeAtRate[1];
					scope.matchWord = word;
					
					angular.forEach(input,function(value,key){
						var listedstaff = value.user_name;
						listedstaff     = listedstaff.toLowerCase();
						removeAtRate    = removeAtRate.toLowerCase();
						
						if(listedstaff.startsWith(removeAtRate))
						{						
							searchedString.push(value);
						}
					});		
				}		
				return searchedString;
			}
			
         };
});



app.filter("filterstaffJotDesc", function(cursorPosition) {

         return function(input,scope) {
	         	var text     = document.getElementById("jot_description");
				var caretPos = cursorPosition.GetCaretPosition(text);
	            var word     = cursorPosition.ReturnWord(text.value, caretPos);

	            var detectUserName = word.match(/\@[a-z]+/gmi);
				var countAtRate    = word.match(/\@/gm);
						
				if(detectUserName)
				{

					scope.detectdepartment = false;
					scope.detectusers 		= true;
					var searchedString 	= [];
					if(word.substring(0, 1) == '@')
					{						
						scope.matchWord = word;		

						var removeAtRate = word.split("@");					
						removeAtRate     = removeAtRate[1];
						angular.forEach(input,function(value,key){
							var listedstaff = value.user_name;
							listedstaff     = listedstaff.toLowerCase();
							removeAtRate    = removeAtRate.toLowerCase();
							if(listedstaff.startsWith(removeAtRate))
							{						
								searchedString.push(value);
							}
						});
					}									
					return searchedString;
				}
			
         };
});




app.filter("descDepartmentFilter", function(cursorPosition) {

         return function(input,scope) {
         		
	         	var text     = document.getElementById("jot_description");
				var caretPos = cursorPosition.GetCaretPosition(text);
	            var word     = cursorPosition.ReturnWord(text.value, caretPos);

	            var detectUserName = word.match(/\#[a-z]+/gmi);
				var countAtRate    = word.match(/\#/gm);
						
				if(detectUserName)
				{

					scope.detectdepartment = true;
					scope.detectusers 		= false;

					var searchedString 	= [];
					if(word.substring(0, 1) == '#')
					{						
						scope.matchWord = word;		

						var removeAtRate = word.split("#");					
						removeAtRate     = removeAtRate[1];
						angular.forEach(input,function(value,key){
							var listedstaff = value.department_name;
							listedstaff     = listedstaff.toLowerCase();
							removeAtRate    = removeAtRate.toLowerCase();
							if(listedstaff.startsWith(removeAtRate))
							{						
								searchedString.push(value);
							}
						});
					}									
					return searchedString;
				}
			
         };
});
"use strict";

app.controller('loginController', ['$scope','$http','$location','localStorageService','loginFactory','$rootScope','AuthSrv','$mdDialog','$timeout','globalRequest',
	function($scope,$http,$location, localStorageService,loginFactory,$rootScope,AuthSrv,$mdDialog,$timeout,globalRequest) {	


		/*********************************************
		* Submit login form
		***********************************************/
		
		$scope.loginUser = function (obj) {
		
	        var dataObj = {
					email : $scope.email,
					password : $scope.password
			};	

			var request={
					url:window.__API_PATH.LOGIN,
					method:"POST",
					data:dataObj
				};

			loginFactory.login(request).then(function(response){
				$scope.loginresult = response;
				
				if(response.status == 1)
				{
					localStorageService.set('token', response.result.token);
					localStorageService.set('user', response.result.user);
					AuthSrv.isLogged = true;
					$mdDialog.cancel();
					if(response.result.user.role == 'hotelowner')
					{
						$location.path('/dashboard');
					}

					if(response.result.user.role == 'staff')
					{
						globalRequest.getHotelDetail(response.result.user.hotel_id);
						$location.path('/dashboard/hotelboard');
					}
										
					
				}									
				
				
			});				
	               
		};

		/*********************************************
		* Forget password
		***********************************************/

		$scope.forgetPassword = function(){

			var data = {email:$scope.forget_email};
			var request={
					url:window.__API_PATH.FORGET_PASSWORD,
					method:"POST",
					data:data
				};

			loginFactory.login(request).then(function(response){
					$scope.forgetresult = response;
					if(response.status == 1)
						{
							
						$rootScope.popupData = {text:response.message,action:'ok'};
						$timeout(function() {
						 	$mdDialog.cancel();
						 }, 200);
						 $timeout(function() {
						 	$rootScope.popup = true;
						 }, 300);	
					 }
			});

		};

		/*********************************************
		* Redirect to signup form
		***********************************************/

		$scope.openSignupForm = function (obj) {
	          $mdDialog.show({
				templateUrl : "/modules/register/views/register.tpl.html",
       			controller  :  "registerController",
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true								
			}).then(function(answer) {}, function() {});  
		};
	}
]);
"use strict";

/**************************************
* Login controller
http://localhost:3000/resetpassword/0c02baa57acfbb5a51cb0a04c587b8eec2099e3d
**************************************/


app.controller('resetPasswordCtlr', ['$scope','loginFactory','$rootScope','$routeParams','$location','$mdDialog','$timeout',
	function($scope,loginFactory,$rootScope,$routeParams,$location,$mdDialog,$timeout) {	

		var token = $routeParams.token;


		if($routeParams.expired && $routeParams.expired == 'true')
		{
		
			$location.path('/');
			$rootScope.popupData  = {
						text:  'Link has been expired.',
						action: 'redirect'
			};
			 $timeout(function() {
			 	$rootScope.popup = true;
			 }, 500);
		}
		
		

		/*********************************************
		* Forget password
		***********************************************/
		$scope.resetResult = {message:"",class:""};
		
		$scope.resetPass = function(){
			if($scope.forget_password == $scope.forget_confirm_password)
			{
				var data = {password:$scope.forget_password,token:token};
				var request={
						url:window.__API_PATH.PASSWORD_RESET,
						method:"POST",
						data:data
				};

				loginFactory.login(request).then(function(response){
						$scope.resetResult = response;
						
						if(response.status == 1)
						{
							
							$timeout(function() {
							 	$location.path('/');
							 }, 200);
							$rootScope.popupData = {text:response.message,action:'ok'};	
							 $timeout(function() {
							 	$rootScope.popup = true;
							 }, 300);	
						 }
				});
			} else {
				$scope.resetResult.message = 'Password is not match with confirm password.';
				$scope.resetResult.class = 'Autherror';
				$scope.resetResult.status = 2;
			}			
			
		};

	}
]);

'use strict';

app.factory('loginFactory', ['$http', function ($http) {
	return{		
		
		login: function(obj){
			return $http(obj).then(function(response){
				return response.data;
			}, function(response){
				return {
					errors: response.data.errors
				};
			});
		},		
	};
}]);
"use strict";

app.controller('editLostFoundController', ['$scope','localStorageService','globalRequest','Upload','$timeout','lstFndDetail','$mdDialog',
	function($scope,localStorageService,globalRequest,Upload,$timeout,lstFndDetail,$mdDialog) {
		var hotel = localStorageService.get('hotel');

		

		/**********************************************************
	    * Item tags 
	    **********************************************************/

		var self = this;
	    self.readonly = false;	    
	    self.itemTag = [];
	    self.search_tag = angular.copy(self.itemTag);
	    self.editableitemTag = angular.copy(self.itemTag);
	    self.tags = [];	    
	    self.newVeg = function(chip) {
	      return {
	        name: chip,
	        type: 'unknown'
	      };
	    };

		/***********************************************
		* Pass edited employee value in current scope
		***********************************************/
				

		angular.forEach(lstFndDetail.detail,function (value,key) {

			if(key == 'date')
			{
				$scope[key] = new Date(value);
			} else if(key == 'search_tag')
			{
				$scope.ctrl.search_tag = value.split(',');
			}
			else {
				$scope[key] = value;
			}
		    
		});

		/*****************************************
		* Jot image upload
		*****************************************/
		$scope.foundImages = '';
		$scope.uploadFoundFiles = function(files, errFiles) {
			$scope.files       = files;	
			
	        if (files && files.length) {
	            Upload.upload({
	                url: window.__API_PATH.UPLOAD_FILE,
	                type:'post',
	                arrayKey: '',
	                data: {	                    
	                    hotel_id     : hotel._id,
	                    folder_name  : 'lost_found',	                    
	                    file         : files
	                }
	            }).then(function (response) {
	                $timeout(function () {
	                   var result = response.data.result;
	                   var uploadedImagesName = []; 
	                    angular.forEach(result, function(data) {				
				            if(data.status){
				            	uploadedImagesName.push(data.filename);
				            }
				        });
				        $scope.image = uploadedImagesName;
	                });
	            }, function (response) {
	                if (response.status > 0) {
	                    $scope.errorMsg = response.status + ': ' + response.data;
	                }
	            }, function (evt) {
	                $scope.foundProgress = 
	                    Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
	            });
	        }

	    };



	    /*****************************************
		* Update found item
		*****************************************/

		$scope.editFoundItem = function(){

			var DataArray = {
			  _id  		     : $scope._id,
			  description    : $scope.description,			 
			  image          : $scope.image,
			  place 		 : $scope.place,	
			  date 	 		 : new Date($scope.date).getTime(),				  
			  no_of_items 	 : $scope.no_of_items,				  
			  category 	     : $scope.category,			  
			  status 	     : $scope.status,			  
			  contact 	     : $scope.contact,				  
			  search_tag 	 : $scope.ctrl.search_tag,				  
			};



			var request={
                    url:window.__API_PATH.UPDATE_LOST_FOUND,
                    method:"PUT",
                    data:DataArray
                  };
            
           
            globalRequest.jotCRUD(request).then(function(response){ 
            	$scope.editlstFoundResult = response;
                if(response.status ==1)
			 	{
			 		$mdDialog.cancel();
			 		globalRequest.getFoundList();
			 	}
            });
		};


		
	}
]);
"use strict";

app.controller('lostFoundCtlr', ['$scope','$rootScope','globalRequest','localStorageService','toastService','$mdDialog',
	function($scope,$rootScope,globalRequest,localStorageService,toastService,$mdDialog) {
		
		$rootScope.directory = 'lost_found';

		globalRequest.getStaff();

		/**********************************************************
	    * Item tags 
	    **********************************************************/

		var self = this;
	    self.readonly = false;	    
	    self.itemTag = [];
	    self.itemTagModel = angular.copy(self.itemTag);
	    self.editableitemTag = angular.copy(self.itemTag);
	    self.tags = [];	    
	    self.newVeg = function(chip) {
	      return {
	        name: chip,
	        type: 'unknown'
	      };
	    };

	    /**********************************************************
	    * Submit lost & found
	    **********************************************************/

	    $scope.submitLostFound = function(){
	    	
	    	$scope.message = ' ';

			var hotel = localStorageService.get('hotel');
			var DataArray = {
			  description    : $rootScope.jot_title,
			  hotel_id       : hotel._id,	
			  image          : $rootScope.issueImages,
			  place 		 : $scope.lost_place,	
			  date 	 		 : new Date($scope.lost_date).getTime(),			  
			  no_of_items 	 : $scope.no_of_items,				  
			  category 	     : $scope.lost_category,			  
			  status 	     : $scope.lost_status,			  
			  contact 	     : $scope.contact,				  
			  search_tag 	 : $scope.ctrl.itemTagModel,				  
			};

			var request={
                    url:window.__API_PATH.LOST_FOUND,
                    method:"POST",
                    data:DataArray
                  };
            
           
            globalRequest.jotCRUD(request).then(function(response){
                    var result = response.result;
                    if(response.status == 1)
                    {
                      $mdDialog.cancel();
                      var popup = {"message":response.message,"class":"success"};
                      toastService.alert(popup);
                    }
            });      
	    };

		

	}
]);
"use strict";

app.controller('lostFoundManagementController',['$scope','$rootScope','globalRequest','localStorageService','toastService','Upload','$timeout','$mdDialog',
	function($scope,$rootScope,globalRequest,localStorageService,toastService,Upload,$timeout,$mdDialog){
		var hotel = localStorageService.get('hotel');

		/************************************
		* Blank all field before open form
		*************************************/

		$scope.blank = function(){
			$scope.description = "";
			$scope.image = "";
			$scope.foundImages = "";
			$scope.files = "";
			$scope.place = "";
			$scope.date = "";
			$scope.no_of_items = "";
			$scope.category = "";
			$scope.status = "";
			$scope.ctrl.itemTagModel = [];
			$scope.contact = "";
			
			$scope.foundProgress = -1;
		};

		$scope.blankFields = function(){
			$scope.blank();
			$scope.lstFoundResult = "";
			
		};


		/**********************************************************
	    * Item tags 
	    **********************************************************/

		var self = this;
	    self.readonly = false;	    
	    self.itemTag = [];
	    self.itemTagModel = angular.copy(self.itemTag);
	    self.editableitemTag = angular.copy(self.itemTag);
	    self.tags = [];	    
	    self.newVeg = function(chip) {
	      return {
	        name: chip,
	        type: 'unknown'
	      };
	    };


	    /*****************************************
		* Jot image upload
		*****************************************/
		$scope.foundImages = '';
		$scope.uploadFoundFiles = function(files, errFiles) {
			$scope.files       = files;	
			
	        if (files && files.length) {
	            Upload.upload({
	                url: window.__API_PATH.UPLOAD_FILE,
	                type:'post',
	                arrayKey: '',
	                data: {	                    
	                    hotel_id     : hotel._id,
	                    folder_name  : 'lost_found',	                    
	                    file         : files
	                }
	            }).then(function (response) {
	                $timeout(function () {
	                   var result = response.data.result;
	                   var uploadedImagesName = []; 
	                    angular.forEach(result, function(data) {				
				            if(data.status){
				            	uploadedImagesName.push(data.filename);
				            }
				        });
				        $scope.foundImages = uploadedImagesName;
	                });
	            }, function (response) {
	                if (response.status > 0) {
	                    $scope.errorMsg = response.status + ': ' + response.data;
	                }
	            }, function (evt) {
	                $scope.foundProgress = 
	                    Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
	            });
	        }

	    };

		/************************************
		* Get lost found item list
		*************************************/			
		
		globalRequest.getFoundList();


		/*****************************************
		* Add found item
		*****************************************/

		$scope.addfoundItem = function(){

			var DataArray = {
			  description    : $scope.description,
			  hotel_id       : hotel._id,	
			  image          : $scope.foundImages,
			  place 		 : $scope.place,	
			  date 	 		 : new Date($scope.date).getTime(),				  
			  no_of_items 	 : $scope.no_of_items,				  
			  category 	     : $scope.category,			  
			  status 	     : $scope.status,			  
			  contact 	     : $scope.contact,				  
			  search_tag 	 : $scope.ctrl.itemTagModel,				  
			};



			var request={
                    url:window.__API_PATH.LOST_FOUND,
                    method:"POST",
                    data:DataArray
                  };
            
           
            globalRequest.jotCRUD(request).then(function(response){ 
            	$scope.lstFoundResult = response;
                if(response.status == 1)
                {
                    if(!$scope.LstFndList)
			 		{
			 			$scope.LstFndList = [];
			 		}
			 		$scope.LstFndList.push(response.result);
                    var popup = {"message":response.message,"class":"success"};
                    toastService.alert(popup);
                    $scope.blank();
                }
            });
		};


		/*****************************************
		* Open edit department
		*****************************************/	

		$scope.openEditLostFound = function(detail){
				$mdDialog.show({
					controller: 'editLostFoundController',
					controllerAs: 'ctrl',
					templateUrl: '/modules/lost_found/views/edit_lost_found.html',
					parent: angular.element(document.body),
					fullscreen: $scope.customFullscreen,
					clickOutsideToClose:true,	
					locals:{lstFndDetail:{detail:detail,prevScope:$scope}}				
				}).then(function(answer) {}, function() {});

		};

		/*****************************************
		* Delete employee
		*****************************************/	

		$scope.removeList = function(detail){

			var request={
				url:window.__API_PATH.DELETE_LOST_FOUND,
				method:"DELETE",
				params:{_id:detail._id}
			};
			
			globalRequest.jotCRUD(request).then(function(response){				
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
			});

		};
}]);
"use strict";

app.controller('footerController', ['$scope','$rootScope','$mdDialog','$location',
	function($scope,$rootScope,$mdDialog,$location) {
		//$rootScope.popup = true;
		$scope.callClosePopup = function(){
			$rootScope.popup = false;
			$rootScope.popupData = {text:'',action:''};
		};	

		$scope.redirectToHome = function(){
			$rootScope.popup = false;
			$rootScope.popupData = {text:'',action:''};
			$location.url($location.path());
			
		};
	}
]);



"use strict";

app.controller('frontHeaderController', ['$scope','$rootScope','$mdDialog','$location','anchorSmoothScroll','$timeout','$routeParams',
	function($scope,$rootScope,$mdDialog,$location,anchorSmoothScroll,$timeout,$routeParams) {	

		$scope.menus = window.__API_PATH.HEADER_MENU;

		if($routeParams.verify && $routeParams.verify == 'true')
		{

			$rootScope.popupData  = {
						text:  '<strong>Congratulations! </strong> <br>You have successfully verified the email address.<br> Please sign-in and start managing your hotels.',
						action: 'redirect'
			};
		
			 $timeout(function() {
			 	$rootScope.popup = true;
			 }, 300);
		}



		/******************************************
		* Scroll page to the section
		******************************************/
		$scope.activemenu = $scope.menus[0].label;
		$scope.gotoElement = function (eID){			
			if(eID.id && eID.id != "")
			{				
				$location.path('/');
				$timeout(function(){
					anchorSmoothScroll.scrollTo(eID.id);
				},200);    		
	
			}
			$timeout(function(){
				$scope.activemenu = eID.label;
			},200);
			      
	    };

	    

		$scope.openLoginForm = function(){
			$mdDialog.show({
				templateUrl : "/modules/login/views/login.tpl.html",
       			controller: "loginController",
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true							
			}).then(function(answer) {}, function() {});
		};


		$scope.openRegisterFormpopup = function(){
			$mdDialog.show({
				templateUrl : "/modules/register/views/register.tpl.html",
       			controller  :  "registerController",
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true								
			}).then(function(answer) {}, function() {});
		};


	}
]);

"use strict";

app.controller('headerController', ['$scope','localStorageService','$rootScope','$mdDialog','$route','globalRequest',
	function($scope,localStorageService,$rootScope,$mdDialog,$route,globalRequest) {	

		$rootScope.userData  = localStorageService.get('user');
		/*
		* Jot form tab list
		*/

		$rootScope.jotTypes        	= window.__API_PATH.JOT_TYPES;


		/**********************************************************
	    * Get active hotel data
	    **********************************************************/

		$scope.activeHotelData   = localStorageService.get('hotel');


		/************************************************
		* Get list of Jot types selected by current user
		*************************************************/

		$rootScope.boards = $scope.activeHotelData.jot_types;

		/*
		*
		* Get hotels list
		*
		*/
		
		globalRequest.getHotels();		


		/*
		* Function
		*
		* Set hotel id in local storage and redirect to jot related to selected hotel
		*
		*/
		$scope.hotel = localStorageService.get('hotel');
		$scope.changeJotView = function(hotel){				
			globalRequest.getJotCount();
			localStorageService.set('hotel', hotel);
			$scope.hotel = localStorageService.get('hotel');
			$route.reload();
			
		};




		/**************************************
		* Open jot popup
		**************************************/

			$scope.quickTaskPopup = function(){
				$mdDialog.show({
					controller: 'jotPopupCtrl',
					templateUrl: '/modules/jot/views/jot-form.html',
					parent: angular.element(document.body),
					fullscreen: $scope.customFullscreen,
					clickOutsideToClose:true,
					locals: {ActivateTab:{label:"Quick Jot",id:'quick',directory:'jot'}}
				}).then(function(answer) {}, function() {});

			};

		


		/**************************************
		* Open popup direct by jot type 
		**************************************/

		$rootScope.openFormByType = function(formType){
			
			$mdDialog.show({
				controller: 'jotPopupCtrl',
				templateUrl: '/modules/jot/views/jot-form.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,				
				locals: {ActivateTab:formType}
			}).then(function(answer) {}, function() {});

		};



		$scope.openLoginForm = function(detail){
			$mdDialog.show({
				templateUrl : "/modules/login/views/login.tpl.html",
       			controller: "loginController",
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true,	
				locals:{empDetail:{detail:detail,prevScope:$scope}}				
			}).then(function(answer) {}, function() {});
		};


	}
]);

"use strict";

app.controller('sidebarCntroller',['$scope','$location',function($scope,$location){
	$scope.getClass = function (path) {
	  return ($location.path() === path) ? 'active' : '';
	};

}]);
"use strict";

app.directive('circleToggle',['$document','$rootScope',function($document,$rootScope){

	return{
		link: function(scope,element){

			$document.on('click', function(event){
				
			});
		}
	
	};
}]);
"use strict";

app.directive('header',['$rootScope',function($rootScope){
	return{
		templateUrl:'/modules/partials/header.html',
		link: function(scope,ele){}
	
	};
}]);




"use strict";

app.controller('editContactController', ['$scope','localStorageService','globalRequest','Upload','$timeout','contactDetail','$mdDialog',
	function($scope,localStorageService,globalRequest,Upload,$timeout,contactDetail,$mdDialog) {
		var hotel = localStorageService.get('hotel');


		
		/***********************************************
		* Pass edited employee value in current scope
		***********************************************/


		angular.forEach(contactDetail.detail,function (value,key) {
		    
		     if(key == 'tags')
			{
				$scope.ctrl.itemTagModel = value;
			} else {
				$scope[key] = value;
			}
		});


		/************************************
		* Edit employee
		*************************************/		
		

		$scope.editContactNumber = function(){	
			
			var request = {
		            url:window.__API_PATH.UPDATE_CONTACT,
		            method:"PUT",
		            data:{
		            	_id      	   :   $scope._id,
		            	first_name    	:  $scope.first_name,
		            	last_name       :  $scope.last_name,
		            	tags        	:  $scope.ctrl.itemTagModel,
		            	email        	:  $scope.email,
		            	contact 		:  $scope.contact
		            }
		          };

			globalRequest.jotCRUD(request).then(function(response){
			 	$scope.contactEditResult = response;
			 	if(response.status ==1)
			 	{
			 		$mdDialog.cancel();
			 		globalRequest.getContactList();
			 	}

			 });

		};
		
		
	}
]);




"use strict";

app.controller('phoneDirController',['$scope','globalRequest','localStorageService','$mdDialog','toastService',function($scope,globalRequest,localStorageService,$mdDialog,toastService){
	var hotel = localStorageService.get('hotel');
	/************************************
	* Blank all field before open form
	*************************************/	

	$scope.blank = function(){
		$scope.first_name = "";		
		$scope.last_name = "";
		$scope.email = "";
		$scope.contact = "";
	};

	$scope.blankFields = function(){
		$scope.blank();
		$scope.ContactResult = "";
	};


	/**********************************************************
    * Item tags 
    **********************************************************/

	var self = this;
    self.readonly = false;	    
    self.itemTag = [];
    self.itemTagModel = angular.copy(self.itemTag);
    self.editableitemTag = angular.copy(self.itemTag);
    self.tags = [];	    
    self.newVeg = function(chip) {
      return {
        name: chip,
        type: 'unknown'
      };
    };

	/************************************
	* Add contact number
	*************************************/		

	 globalRequest.getContactList();

	/************************************
	* Add contact number
	*************************************/		
	

	$scope.addContactNumber = function(){	

		var request = {
		            url:window.__API_PATH.ADD_CONTACT,
		            method:"POST",
		            data:{
		            	hotel_id      	:  hotel._id,
		            	first_name    	:  $scope.first_name,
		            	last_name       :  $scope.last_name,
		            	tags        	:  $scope.ctrl.itemTagModel,
		            	email        	:  $scope.email,
		            	contact         :  $scope.contact
		            }
		          };
		globalRequest.jotCRUD(request).then(function(response){
		 	$scope.ContactResult = response;

		 	if(response.status == 1)
		 	{
		 		$scope.blank();
				$scope.ctrl.itemTagModel = [];
		 		if(!$scope.ContactList)
		 		{
		 			$scope.ContactList = [];
		 		}
		 		$scope.ContactList.push(response.result);
		 		
		 	}
		 });

	};


	/*****************************************
	* Open edit Contact
	*****************************************/	

	$scope.openEditContact = function(detail){
			$mdDialog.show({
				controller: 'editContactController',
				controllerAs: 'ctrl',
				templateUrl: '/modules/phone_directory/views/edit_contact.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true,	
				locals:{contactDetail:{detail:detail,prevScope:$scope}}				
			}).then(function(answer) {}, function() {});

	};


	/*****************************************
	* Favorite contact
	*****************************************/

	$scope.makeFavorite = function(detail){
		var fav = 'no';
		var message = '';
		if(detail.favorite == 'no')
		{
			fav =  'yes';
		}

		if(detail.favorite == 'yes')
		{
			fav =  'no';
		}
		var request={
			url:window.__API_PATH.UPDATE_CONTACT,
			method:"PUT",
			data:{_id:detail._id,favorite:fav}
		};
		
		globalRequest.jotCRUD(request).then(function(response){	
			globalRequest.getContactList();
		});

	};


	/*****************************************
	* Delete contact
	*****************************************/	

	$scope.removeContact = function(detail){

		var request={
			url:window.__API_PATH.DELETE_CONTACT,
			method:"DELETE",
			params:{_id:detail._id}
		};
		
		globalRequest.jotCRUD(request).then(function(response){				
			var popup = {"message":response.message,"class":response.class};
			toastService.alert(popup);
		});

	};
	
	
}]);
"use strict";

app.filter('contactfilter',function(){
	return function(input,scope){

		if(input)
		{

			var searchContact        = scope.searchcontact;

			if(!searchContact){
				return input;
			}

			if(searchContact)
			{
				var removeSpaceFromString = searchContact.replace(/\s/g,'');			
			}
			input   =   input.filter(function( obj ) {
							var fullName = obj.first_name+obj.last_name;
								if(fullName.match(new RegExp("(" + removeSpaceFromString + ")", "i")))
								{
									return true;
								}							
								
						});
		}
		return input;

	};

});
"use strict";

app.controller('profileController',['$scope','$rootScope',function($scope,$rootScope){


}]);
"use strict";

app.controller('registerController', ['$scope','$rootScope','registerFactory','$location','$mdDialog','$timeout',
	function($scope,$rootScope,registerFactory,$location,$mdDialog,$timeout) {

		$scope.registerUser = function (obj) {

	        var dataObj = {
					
					first_name  	 : $scope.first_name,
					last_name   	 : $scope.last_name,
					email       	 : $scope.email,
					contact_number   : $scope.contact_number,
					password    	 : $scope.password
			};

			var request={
					url:window.__API_PATH.REGISTER,
					method:"POST",
					data:dataObj
				};

			registerFactory.register(request).then(function(response){

				$scope.registerResult   = response;

				if(response.status == 1)
				{
					
					$rootScope.popupData = {text:response.message,action:'ok'};
					$timeout(function() {
					 	$mdDialog.cancel();
					 }, 200);
					 $timeout(function() {
					 	$rootScope.popup = true;
					 }, 300);	
				 }			
			});       
		};	


		$scope.openLoginForm = function (obj) {	
	           $mdDialog.show({
				templateUrl : "/modules/login/views/login.tpl.html",
       			controller: "loginController",
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true							
			}).then(function(answer) {}, function() {});    
		};	

		
	}
]);


'use strict';

app.factory('registerFactory', ['$http', function ($http) {
	return{		
	
		register: function(obj){
			return $http(obj).then(function(response){
				return response.data;
			}, function(response){
				return {
					errors: response.data.errors
				};
			});
		},		
	};
}]);
"use strict";

app.controller('editCategoryController', ['$scope','localStorageService','globalRequest','Upload','$timeout','catDetail','$mdDialog',
	function($scope,localStorageService,globalRequest,Upload,$timeout,catDetail,$mdDialog) {
		var hotel = localStorageService.get('hotel');

		
		/***********************************************
		* Pass edited employee value in current scope
		***********************************************/

		angular.forEach(catDetail.detail,function (value,key) {
		    $scope[key] = value;
		});
		

		/************************************
		* Edit Item
		*************************************/			

		$scope.editInvtCat = function(){
	
						
			var request = {
			            url    : window.__API_PATH.UPDATE_INVENTORY_CATEGORY,
			            method : "PUT",
			            data:{
			            	_id  		 			  :  $scope._id,
			            	inventory_category_name   :  $scope.inventory_category_name
			            }
			          };

			globalRequest.jotCRUD(request).then(function(response){
			 	$scope.invtEditResult = response;
			 	if(response.status ==1)
			 	{
			 		$mdDialog.cancel();
			 		globalRequest.getVendingCategory();
			 	}

			 });
		};
		
	}
]);




"use strict";

app.controller('editInventoryController', ['$scope','localStorageService','globalRequest','Upload','$timeout','invDetail','$mdDialog',
	function($scope,localStorageService,globalRequest,Upload,$timeout,invDetail,$mdDialog) {
		var hotel = localStorageService.get('hotel');

		
		/***********************************************
		* Pass edited employee value in current scope
		***********************************************/
		

		$scope.inventCatList = invDetail.prevScope.inventCatList;

		angular.forEach(invDetail.detail,function (value,key) {
		    $scope[key] = value;
		});
		
		if($scope.image)
		{
			$scope.image = '/images/hotel/'+$scope.hotel_id+'/inventory/'+$scope.image;
		} else {
			$scope.image = '/assets/images/vending_default.jpg';
		}

		/************************************
		* Edit Item
		*************************************/			

		$scope.editItem = function(){
	
			var status  = ($scope.status)?$scope.status:'inactive';			
			var request = {
			            url    : window.__API_PATH.UPDATE_ITEM,
			            method : "PUT",
			            data:{
			            	_id  		 :  $scope._id,
			            	item_name    :  $scope.item_name,
			            	category     :  $scope.category,
			            	price        :  $scope.price,
			            	sku_code     :  $scope.sku_code,
			            	quantity 	 :  $scope.quantity,		            
			            	image 	     :  $scope.profileimages
			            }
			          };

			globalRequest.jotCRUD(request).then(function(response){
			 	$scope.invEditResult = response;
			 	if(response.status ==1)
			 	{
			 		$mdDialog.cancel();
			 		globalRequest.getVendingItems();
			 	}

			 });
		};

		/*****************************************
		* Profile image upload
		*****************************************/	

		$scope.uploadprofileImage = function(files, errFiles) {
			$scope.profile = files;	
			
	        if (files && files.length) {
	            Upload.upload({
	                url: window.__API_PATH.UPLOAD_FILE,
	                type:'post',
	                arrayKey: '',
	                data: {	                    
	                    hotel_id     : hotel._id,
	                    folder_name  : 'inventory',	                    
	                    file         : files
	                }
	            }).then(function (response) {
	                $timeout(function () {	                  
	                   $scope.profileimages = response.data.result[0].filename;
	                   
	                });
	            }, function (response) {
	                if (response.status > 0) {
	                    $scope.errorMsg = response.status + ': ' + response.data;
	                }
	            }, function (evt) {
	                $scope.profileProgress = 
	                    Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
	            });
	        }

	    };
		
	}
]);




"use strict";

app.controller('inventoryCatController', ['$scope','localStorageService','globalRequest','Upload','$timeout','$mdDialog','$route','toastService',
	function($scope,localStorageService,globalRequest,Upload,$timeout,$mdDialog,$route,toastService) {
		var hotel = localStorageService.get('hotel');


		/************************************
		* Blank all field before open form
		*************************************/	

		$scope.blank = function(){
			$scope.inventory_category_name = "";		
		};

		$scope.blankFields = function(){
			$scope.blank();
			$scope.inverntoryResult = "";
		};



		/************************************
		* Get Category list
		*************************************/			
		
		globalRequest.getVendingCategory();

		
		/************************************
		* Add category
		*************************************/		
		

		$scope.addInvtCat = function(){
		
			var request = {
			            url:window.__API_PATH.ADD_INVENTORY_CATEGORY,
			            method:"POST",
			            data:{
			            	hotel_id      			  :  hotel._id,
			            	inventory_category_name   :  $scope.inventory_category_name
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){
			 	$scope.invtResult = response;
			 	$scope.blank();

			 	if(response.status == 1)
			 	{
			 		if(!$scope.invtList)
			 		{
			 			$scope.invtList = [];
			 		}
			 		$scope.invtList.push(response.result);
			 	}
			 });

		};

		/*****************************************
		* Open edit category
		*****************************************/	

		$scope.openEditForm = function(detail){
			
				$mdDialog.show({
					controller: 'editCategoryController',
					templateUrl: '/modules/vending_machine/views/edit_item_category.html',
					parent: angular.element(document.body),
					fullscreen: $scope.customFullscreen,
					clickOutsideToClose:true,	
					locals:{catDetail:{detail:detail,prevScope:$scope}}				
				}).then(function(answer) {}, function() {});

		};


		/*****************************************
		* Delete category
		*****************************************/	

		$scope.removeCat = function(detail){

			var request={
				url:window.__API_PATH.DELETE_INVENTORY_CATEGORY,
				method:"DELETE",
				params:{_id:detail._id}
			};
			
			globalRequest.jotCRUD(request).then(function(response){				
				$mdDialog.cancel();
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
			});

		};

		
		
	}
]);




"use strict";

app.controller('inventoryController', ['$scope','localStorageService','globalRequest','Upload','$timeout','$mdDialog','$route','toastService',
	function($scope,localStorageService,globalRequest,Upload,$timeout,$mdDialog,$route,toastService) {
		
		var hotel = localStorageService.get('hotel');

		/************************************
		* Blank all field before open form
		*************************************/

		$scope.blank = function(){
			$scope.item_name = "";
			$scope.quantity = "";
			$scope.price = "";
			$scope.category = "";
			$scope.sku_code = "";
			$scope.profile_image = "";
			$scope.profile = "";
			$scope.profileProgress = -1;
		};

		$scope.blankFields = function(){
			$scope.blank();
			$scope.inverntoryResult = "";
		};

		/************************************
		* Get item list
		*************************************/	
		globalRequest.getVendingItems();


		/************************************
		* Get Category list
		*************************************/			
			
		var catRequest = {
		            url:window.__API_PATH.GET_INVENTORY_CATEGORY,
		            method:"GET",
		            params:{
		            	hotel_id    :  hotel._id		
		            }
		          };
		globalRequest.jotCRUD(catRequest).then(function(response){				
		 	$scope.inventCatList = response.result;
		});

		
		/************************************
		* Add item
		*************************************/		
		

		$scope.addItem = function(){
			var status  = ($scope.status)?$scope.status:'inactive';			
			var request = {
			            url:window.__API_PATH.ADD_ITEM,
			            method:"POST",
			            data:{
			            	hotel_id     :  hotel._id,
			            	item_name    :  $scope.item_name,
			            	category     :  $scope.category,
			            	price        :  $scope.price,
			            	sku_code     :  $scope.sku_code,
			            	quantity 	 :  $scope.quantity,		            
			            	image 	     :  $scope.profileimages		            
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){
			 	$scope.inverntoryResult = response;
			 	$scope.blank();
			 	if(response.status == 1)
			 	{
			 		if(!$scope.inverntoryList)
			 		{
			 			$scope.inverntoryList = [];
			 		}

			 		$scope.inverntoryList.push(response.result);
			 	}
			 });

		};

		/*****************************************
		* Open edit employee
		*****************************************/	

		$scope.openEditForm = function(detail){
			console.log(detail);
				$mdDialog.show({
					controller: 'editInventoryController',
					templateUrl: '/modules/vending_machine/views/edit_inventory.html',
					parent: angular.element(document.body),
					fullscreen: $scope.customFullscreen,
					clickOutsideToClose:true,	
					locals:{invDetail:{detail:detail,prevScope:$scope}}				
				}).then(function(answer) {}, function() {});

			};


		/*****************************************
		* Delete Item
		*****************************************/	

		$scope.removeItem = function(detail){
			var request={
				url:window.__API_PATH.DELETE_ITEM,
				method:"DELETE",
				params:{_id:detail._id}
			};
			
			globalRequest.jotCRUD(request).then(function(response){				
				$mdDialog.cancel();
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
			});

		};

		/*****************************************
		* Profile image upload
		*****************************************/	

		$scope.uploadprofileImage = function(files, errFiles) {
			$scope.profile = files;	
			
	        if (files && files.length) {
	            Upload.upload({
	                url: window.__API_PATH.UPLOAD_FILE,
	                type:'post',
	                arrayKey: '',
	                data: {	                    
	                    hotel_id     : hotel._id,
	                    folder_name  : 'inventory',	                    
	                    file         : files
	                }
	            }).then(function (response) {
	                $timeout(function () {
	                   console.log(response);
	                   $scope.profileimages = response.data.result[0].filename;
	                   
	                });
	            }, function (response) {
	                if (response.status > 0) {
	                    $scope.errorMsg = response.status + ': ' + response.data;
	                }
	            }, function (evt) {
	                $scope.profileProgress = 
	                    Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
	            });
	        }

	    };

	
		
	}
]);




"use strict";

app.controller('vendingMachineCtlr', ['$scope','$rootScope','localStorageService','globalRequest',
	function($scope,$rootScope,localStorageService,globalRequest) {
		
		/**********************************************************
	    * Get item category
	    **********************************************************/
	    globalRequest.getVendingCategory();


		/**********************************************************
	    * Get items list
	    **********************************************************/				
		var hotel = localStorageService.get('hotel');	
		$scope.products = '';			
		var request={
                url:window.__API_PATH.GET_ITEMS,
                method:"GET",
                params:{hotel_id:hotel._id}
              };

        globalRequest.jotCRUD(request).then(function(response){        	
        	if(response.status == 1)
            {
              $scope.products = response.result;
            }
        });

        /**********************************************************
	    * Add item in cart
	    **********************************************************/

		$scope.cart = [];		
		$scope.addToCart = function(item,quantity){
			if(!isNaN(quantity) && quantity)
			{
				item.totalprice = parseInt(item.price) * parseInt(quantity);
			} else {
				item.totalprice = parseInt(item.price) * 0;
			}
			
			item.editquantity   = quantity;
			$scope.cart.push(item);
		};

		/**********************************************************
	    * Update price in cart
	    **********************************************************/

		$scope.changeItemPrice = function(item,quantity){	
			var cartItem  = $scope.cart;
			var updatedCart = [];
			angular.forEach(cartItem,function(key, value) {	
					if(key._id == item._id)
					{
						if(!isNaN(quantity) && quantity)
						{
							key.totalprice = parseInt(key.price) * parseInt(quantity);
						} else {
							key.totalprice = parseInt(key.price) * 0;
						}		
					}
					updatedCart.push(key);
			});
			$scope.cart = updatedCart;
		};


		/**********************************************************
	    * Remove item from cart
	    **********************************************************/

		$scope.removeItem = function(itemID) {
			var cartItem  = $scope.cart;
			cartItem      = cartItem.filter(function( obj ) {
									return obj._id != itemID;					  
							});
			$scope.cart = cartItem;
		};

		/**********************************************************
	    * Calculate total price in cart
	    **********************************************************/

		$scope.getTotal = function(){
			var cartItem  = $scope.cart;
			var total = 0;
			angular.forEach(cartItem,function(key, value) {	
					if(!isNaN(key.totalprice))
					{
						total += parseInt(key.totalprice);
					}				
					
			});
			return total;
		};



		/**********************************************************
	    * Check item is already selected or not
	    **********************************************************/

		$scope.checkSelected = function(itemID){
			var cartItem  = $scope.cart;
			var match = false;
			angular.forEach(cartItem,function(key, value) {	
				if(key._id == itemID)
				{
					match = true;
				}
			});			
			return match;
		};



		/**********************************************************
	    * Range slider
	    **********************************************************/

		/*$scope.slider = {
		  minValue: 0,
		  maxValue: 10000,		 
		  options: {
		    translate: function(value) {
		      return '$' + value;
		    },
		    showSelectionBar: true,		    
		    getPointerColor: function(value) {
	            if (value <= 1000)
	                return 'red';
	            if (value <= 5000)
	                return 'orange';
	            if (value <= 10000)
	                return 'green';
	            return '#2AE02A';
	        }
		  }		  
		};
		$timeout(function () {
            $scope.$broadcast('rzSliderForceRender');
        },300);*/

        /**********************************************************
	    * Submit vending machine cart data
	    **********************************************************/

        $scope.submitVendingDetail = function() {
        	var payment,paymentMode,cardType,cardOwner,roomNumber,paymentData,cartTags;        	
        	var cartErrors = {itemerror:"",tagerror:"",paymenterror:"",error:false};
        	payment        = $scope.payment_status;
        	paymentMode    = $scope.ctlr.paymentmode;
        	cardType 	   = $scope.ctlr.cardtype;
        	cardOwner 	   = $scope.ctlr.cardowner;
        	roomNumber 	   = $scope.ctlr.payment_room_number;
        	cartTags       = $scope.cart_tags;
        	$scope.cartErrors = '';

       		if($scope.cart.length == 0)
       		{
       			cartErrors.itemerror = 'Please select items';
       			cartErrors.error = true;
       		}


       		if(cartTags == '' || cartTags == undefined)
       		{
       			cartErrors.error = true;
       			cartErrors.tagerror = 'This field is required';
       		}

       		if(payment == '' || payment == undefined)
       		{
       			cartErrors.error = true;
       			cartErrors.paymenterror = 'Please select payment option';
       		}

       		if(cartErrors.error)
       		{
       			
       			$scope.cartErrors = cartErrors;
       			return false;
       		}
        	
        	paymentData = {	payment_status:payment,detail:''};
        	if(payment == 'paid')
        	{
        		if(paymentMode == 'card')
        		{
        			paymentData.detail = {
	        			paymentmode : paymentMode,
	        			cardtype    : cardType,
	        			cardowner   : cardOwner	        			
	        		};
        		}
        		if(paymentMode == 'cash')
        		{
        			paymentData.detail = {
	        			paymentmode : paymentMode
	        		};

        		}
        	}
        	if(payment == 'unpaid')
        	{
        		paymentData.detail = {
	        			room_number : roomNumber
	        	};
        	}


        	var request = {
				            url:window.__API_PATH.PURCHASE,
				            method:"POST",
				            data:{
				            	hotel_id  : hotel._id,
				            	items     : $scope.cart,
				            	payment   : paymentData,
				            	user_info : cartTags,				      
	        					date      : new Date().getTime()
				            }
				          };
			 globalRequest.jotCRUD(request).then(function(response){
			 	$scope.cartSaved = response;
			 	$scope.cart_tags = '';
			 	$scope.ctlr.paymentmode = '';
			 	$scope.ctlr.cardtype = '';
			 	$scope.ctlr.payment_room_number = '';
			 	$scope.payment_status = '';
			 });	          
        	
        };
	}
]);




"use strict";

app.filter('productfilter',function(){
	return function(input,scope){

		if(input)
		{
			/*var minPrice 		= scope.slider.minValue;
			var maxPrice 		= scope.slider.maxValue;*/
			var searchItemName  = scope.searchItemName;
			var itemCategory 	= scope.itemCategory;

			
			input   =   input.filter(function( obj ) {
						/*if(obj.price >= minPrice && obj.price <= maxPrice)
						{*/

							if(!searchItemName && !itemCategory)
							{
								return true;
							}

							if(searchItemName && !itemCategory)
							{
								if (obj.item_name.match(new RegExp("(" + searchItemName + ")", "i"))) 
								{
							       return true;
							    }
							}

							if(!searchItemName && itemCategory)
							{
								if (obj.category.match(new RegExp("(" + itemCategory + ")", "i"))) 
								{
							       return true;
							    }
							}


							if(searchItemName && itemCategory)
							{
								if (obj.item_name.match(new RegExp("(" + searchItemName + ")", "i")) && obj.category.match(new RegExp("(" + itemCategory + ")", "i"))) 
								{
							       return true;
							    }
							}
						/*}*/
					});
		}
		return input;

	};

});
"use Strict";

app.service('anchorSmoothScroll', function(){
    
    this.scrollTo = function(eID) {

        // This scrolling function 
        // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
        
        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( var j=startY; j>stopY; j-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }
        
        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }
        
        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }

    };
    
});         
"use strict";
app.filter('bytes', function() {
	return function(bytes, precision) {
		if (isNaN(parseFloat(bytes)) || !isFinite(bytes)) return '-';
		if (typeof precision === 'undefined') precision = 1;
		var units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'],
			number = Math.floor(Math.log(bytes) / Math.log(1024));
		return (bytes / Math.pow(1024, Math.floor(number))).toFixed(precision) +  ' ' + units[number];
	};
});

"use strict";

app.directive('closepopup', function($mdDialog) {
      return {                
          link: function(scope, element, attrs) {
              
              scope.closePopUpByDirective = function () {
                $mdDialog.cancel();
              };              
          }
      };
});

"use strict";

app.filter('currency',function(localStorageService) {
	return function(input,scope){
		var hotel = localStorageService.get('hotel');
		var currency;
		if(hotel.currency)
		{
			currency = hotel.currency;			

		} else {

			currency = '$';
		}
		return currency+input;
	};
});
'use strict';

app.factory('cursorPosition', [function () {
	return{		
		
		GetCaretPosition: function(ctrl){
			var CaretPos = 0; 
            if (document.selection) {
                ctrl.focus();
                var Sel = document.selection.createRange();
                Sel.moveStart('character', -ctrl.value.length);
                CaretPos = Sel.text.length;
            }            
            else if (ctrl.selectionStart || ctrl.selectionStart == '0')
                CaretPos = ctrl.selectionStart;
            return (CaretPos);
		},	

		ReturnWord: function(text, caretPos){
			var index = text.indexOf(caretPos);
            var preText = text.substring(0, caretPos);
            
          

           /* if (preText.indexOf(" ") > 0) {*/
                var words = preText.split(" ");
                
                return words[words.length - 1]; //return last word
            /*}
            else {
                return preText;
            }*/			
		},

	};
}]);
"use strict";
app.filter('digits', function() {
return function(input) {
   if (input < 10) { 
          input = '0' + input;
      }
      return input;
    };
});
"use strict";

app.filter('groupBy', function(){
		return function(list, group_by) {

		var filtered = [];
		var prev_item = null;
		var group_changed = false;
		// this is a new field which is added to each item where we append "_CHANGED"
		// to indicate a field change in the list
		var new_field = group_by + '_CHANGED';

		// loop through each item in the list
		angular.forEach(list, function(item) {

			group_changed = false;

			// if not the first item
			if (prev_item !== null) {

				// check if the group by field changed
				if (prev_item[group_by] !== item[group_by]) {
					group_changed = true;
				}

			// otherwise we have the first item in the list which is new
			} else {
				group_changed = true;
			}

			// if the group changed, then add a new field to the item
			// to indicate this
			if (group_changed) {
				item[new_field] = true;
			} else {
				item[new_field] = false;
			}

			filtered.push(item);
			prev_item = item;

		});

		return filtered;
		};
	});
'use strict';

app.factory('replaceOccurence', ['$http', function ($http) {
	return{	
		replaceAll: function(string, search, replacement){
			
			replacement = " "+replacement+" ";
			
            return string.replace(new RegExp("(?:^|\\s)("+search+")(?=\\s|$)"),replacement);
		}
	};
}]);

"use strict";

app.factory('globalRequest',['$http','localStorageService','$rootScope',function($http,localStorageService,$rootScope){
	return{
		
		/*************************************
		* Function for GET, POST, PUT, DELETE request
		**************************************/

		jotCRUD: function(obj){
			return $http(obj).then(function(response){
				return response.data;
			}, function(response){
				return {
					errors: response.data.errors
				};
			});
		},


		getHotelStatus:function(hotelID){
			$rootScope.hotelStatus = '';
			var hotelstatusrequest = {
					url:window.__API_PATH.GET_HOTEL_STATUS,
					method:"GET",
					params: { 
								"hotel_id":hotelID						
							}
				};

			return $http(hotelstatusrequest).then(function(response){	
				return response.data.result;

			}, function(response){
				$rootScope.hotelStatus = response.data.errors;				
			});
		},

		getHotels:function(){
			$rootScope.hotels = '';
			var userData   	  = localStorageService.get('user');
			var paramsData 	  = { 
						"user_id":userData._id						
				};
			var hotellistrequest={
				url:window.__API_PATH.GET_HOTELS,
				method:"GET",
				params:paramsData
			};

			return $http(hotellistrequest).then(function(response){	
				$rootScope.hotels = response.data.result;
			}, function(response){
				$rootScope.hotels = response.data.errors;				
			});
		},


		getHotelDetail:function(hotelID){						
			var paramsData 	  = { 
						"hotel_id":hotelID						
				};
			var hotellistrequest={
				url:window.__API_PATH.GET_HOTEL_DETAIL,
				method:"GET",
				params:paramsData
			};

			return $http(hotellistrequest).then(function(response){	
				console.log(response.data.result);
				localStorageService.set('hotel', response.data.result);
			});
		},

		getStaff:function(){
			var hotel   = localStorageService.get('hotel');
			var request = {
						url:window.__API_PATH.STAFF_SUGGESTION,
						method:"GET",
						params:{hotel_id: hotel._id}
				};

			return $http(request).then(function(response){
				$rootScope.staffList = response.data.result;
			}, function(response){
				$rootScope.staffList = response.data.errors;				
			});
		},


		getDepartments:function(){
			var hotel   = localStorageService.get('hotel');
			var request = {
						url:window.__API_PATH.GET_DEPARTMENTS,
						method:"GET",
						params:{hotel_id: hotel._id}
				};

			return $http(request).then(function(response){
				$rootScope.departmentList = response.data.result;
			}, function(response){
				$rootScope.departmentList = response.data.errors;				
			});
		},

		getShiftTime:function(){
				var hotel   = localStorageService.get('hotel');
				var request = {
						url:window.__API_PATH.GET_HOTELSHIFTS,
						method:"GET",
						params:{hotel_id: hotel._id}
				};

			return $http(request).then(function(response){
				$rootScope.shiftList = response.data.result;
			}, function(response){
				$rootScope.shiftList = response.data.errors;				
			});
		},

		getVendingItems:function(){
				var hotel   = localStorageService.get('hotel');
				var request = {
						url:window.__API_PATH.GET_ITEMS,
						method:"GET",
						params:{hotel_id: hotel._id}
				};

			return $http(request).then(function(response){
				$rootScope.inverntoryList = response.data.result;
			}, function(response){
				$rootScope.inverntoryList = response.data.errors;				
			});
		},

		getVendingCategory:function(){
				var hotel   = localStorageService.get('hotel');
				var request = {
						url:window.__API_PATH.GET_INVENTORY_CATEGORY,
						method:"GET",
						params:{hotel_id: hotel._id}
				};

			return $http(request).then(function(response){
				$rootScope.invtList = response.data.result;
			}, function(response){
				$rootScope.invtList = response.data.errors;				
			});
		},

		getFoundList:function(){
				var hotel   = localStorageService.get('hotel');
				var request = {
						url:window.__API_PATH.GET_LOST_FOUND,
						method:"GET",
						params:{hotel_id: hotel._id}
				};

			return $http(request).then(function(response){
				$rootScope.LstFndList = response.data.result;
			}, function(response){
				$rootScope.LstFndList = response.data.errors;				
			});
		},

		getContactList:function(){
				var hotel   = localStorageService.get('hotel');

				var request = {
			            url:window.__API_PATH.GET_CONTACTS,
			            method:"GET",
			            params:{
			            	hotel_id      	:  hotel._id
			            }
			          };

			return $http(request).then(function(response){
				$rootScope.ContactList = response.data.result;
			}, function(response){
				$rootScope.ContactList = response.data.errors;				
			});
		},


		getDocument:function(){
				var hotel   = localStorageService.get('hotel');

				var request = {
			            url:window.__API_PATH.GET_DOCUMENT,
			            method:"GET",
			            params:{
			            	hotel_id      	:  hotel._id
			            }
			          };

			return $http(request).then(function(response){
				$rootScope.documentList = response.data.result;
			}, function(response){
				$rootScope.documentList = response.data.errors;				
			});
		},



		getJotCount:function(){
				var hotel   = localStorageService.get('hotel');

				var request = {
			            url:window.__API_PATH.JOT_COUNT,
			            method:"GET",
			            params:{
			            	hotel_id      	:  hotel._id
			            }
			          };

			return $http(request).then(function(response){
				$rootScope.JotCount = response.data.result;			

			}, function(response){
				$rootScope.JotCount = response.data.errors;				
			});
		},


		getJotList:function(JotType){
				var hotel   	 = localStorageService.get('hotel');
				var userDetail   = localStorageService.get('user');
				
				var request = {
			            url:window.__API_PATH.GET_JOT,
			            method:"GET",
			            params:{
			            	hotel_id      	:  hotel._id,
			            	jot_type      	:  JotType,			            	
			            	user_name  		:  userDetail.user_name
			            }
			          };

			return $http(request).then(function(response){
				$rootScope.JotListData = response.data.result;			

			}, function(response){
				$rootScope.JotListData = response.data.errors;				
			});
		},
		
	};

}]);
"use strict";

app.directive('slideable', function () {
    
    return {
        restrict:'C',
        compile: function (element, attr) {
            // wrap tag
            var contents = element.html();
            element.html('<div class="slideable_content" style="margin:0 !important; padding:0 !important" >' + contents + '</div>');

            return function postLink(scope, element, attrs) {
                // default properties
                attrs.duration = (!attrs.duration) ? '0.7s' : attrs.duration;
                attrs.easing = (!attrs.easing) ? 'ease-in-out' : attrs.easing;
                element.css({
                    'overflow': 'hidden',
                    'height': '0px',
                    'transitionProperty': 'height',
                    'transitionDuration': attrs.duration,
                    'transitionTimingFunction': attrs.easing
                });
            };
        }
    };
})
.directive('slideToggle', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            
            var target = document.querySelector(attrs.slideToggle);
          
            attrs.expanded = false;
            element.bind('click', function() {
                var content = target.querySelector('.slideable_content');
                if(!attrs.expanded) {
                    content.style.border = '1px solid rgba(0,0,0,0)';
                    var y = content.clientHeight+50;
                    content.style.border = 0;
                    target.style.height = y + 'px';
                } else {
                    target.style.height = '0px';
                }
                attrs.expanded = !attrs.expanded;
            });
        }
    };
});




"use strict";
app.filter('timeConvertorfilter', function() {
	return function(input, scope) {
		if(input)
		{
			var timeVal = '';
			input = parseInt(input);
			if(input <= 12)
			{
				timeVal = input+" AM";
			} else {
				input = input-12;				
				timeVal = input+" PM";
			}

			return timeVal;
		}

	};
});


app.filter('getmeridiem', function() {
	return function(input, scope) {


		if(input)
		{
			var timeVal,hour,min;

			var timeArray = input.split(':');

			if(timeArray[0] != '')
			{

				if(timeArray[0] == -1)
				{

					hour 	=   timeArray[0];
					min     =   timeArray[1];
					timeVal = "Untill Finish";

				} else {


					if(timeArray[0] <= 12)
					{
						hour 	=  timeArray[0];
						min     =   timeArray[1];
						timeVal = hour+":"+min+" AM";
					} else {
						hour 	=  timeArray[0]-12;
						min     =   timeArray[1];				
						timeVal = hour+":"+min+" PM";
					}
				}	
			}

			return timeVal;
		}

	};
});

'use strict';

app.factory('toastService', ['$mdToast','$timeout', function ($mdToast, $timeout) {
	return{
		alert: function(opt){
			$mdToast.hide();	
			$timeout(function(){
				var toast = $mdToast.simple()
				.textContent(opt.message)
				.position('bottom right')
				.toastClass(opt.class)
				.action('x')
				.hideDelay(3000);

				$mdToast.show(toast).then(function(response) {
				    if ( response == 'ok' ) {
				    	$mdToast.hide();
				    }
				});
			},1000);
		}
	};
}]);