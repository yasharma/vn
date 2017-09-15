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