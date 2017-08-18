// 'use strict';


var app = angular.module('hoteljotApp',[
			'ngAnimate',
			'ngMaterial',
			'ngRoute',
			'LocalStorageModule',
			'ngMdIcons'	,
			'ngFileUpload',
			'angularjs-datetime-picker',
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
__API_PATH.UPDATE_JOT  				= '/api/update_jot';
__API_PATH.DELETE_JOT  				= '/api/delete_jot';

__API_PATH.GET_DEPARTMENTS  		= '/api/get_departments';
__API_PATH.ADD_DEPARTMENT  			= '/api/add_department';
__API_PATH.UPDATE_DEPARTMENT  		= '/api/update_department';
__API_PATH.DELETE_DEPARTMENT  		= '/api/delete_department';

__API_PATH.FORGET_PASSWORD			= '/api/forgot_password';
__API_PATH.PASSWORD_RESET			= '/api/resetPassword';
__API_PATH.LOST_FOUND			    = '/api/add_lost_found';
__API_PATH.UPLOAD_FILE			    = '/api/uploadfiledata';

__API_PATH.GET_ITEMS			    = '/api/get_item';
__API_PATH.UPDATE_ITEM			    = '/api/update_item';
__API_PATH.ADD_ITEM			        = '/api/add_item';
__API_PATH.DELETE_ITEM			        = '/api/delete_item';
__API_PATH.PURCHASE			        = '/api/add_to_cart';

__API_PATH.ADD_INVENTORY_CATEGORY		= '/api/add_inventory_category';
__API_PATH.UPDATE_INVENTORY_CATEGORY	= '/api/update_inventory_category';
__API_PATH.DELETE_INVENTORY_CATEGORY	= '/api/delete_inventory_category';
__API_PATH.GET_INVENTORY_CATEGORY		= '/api/get_inventory_category';

__API_PATH.ADD_MEMBER		        = '/api/add_member';
__API_PATH.UPDATE_MEMBER		    = '/api/update_member';
__API_PATH.DELETE_MEMBER		    = '/api/delete_member';


__API_PATH.JOT_TYPES = {
							quick:{label:"Quick Jot",id:'quick',src:'assets/images/logo_pic.png',icontype:'image',directory:'jot'},
							issue:{label:"Issue",id:'issue',src:'warning',icontype:'icon',directory:'jot'},
							task:{label:"task",id:'task',src:'format_list_bulleted',icontype:'icon',directory:'jot'},
							note:{label:"Note",id:'note',src:'insert_drive_file',icontype:'icon',directory:'jot'},
							lost_found:{label:"Lost & Found",id:'lost_found',src:'local_drink',icontype:'icon',directory:'lost_found'},
							vending_machine:{label:"Vending Machine",id:'vending_machine',src:'vignette',icontype:'icon',directory:'vending_machine'},
							meeting_room:{label:"Meeting Room",id:'meeting_room',src:'group',icontype:'icon',directory:'jot'}
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
									},
									{
										label        :"Yearly",
										id           :"yearly",
										description  : "Recurring every year"
									}

								]; 


__API_PATH.MONTH = [
								{
									label 	     : "January",
									value    	 : "1"			
								},
								{
									label 	     : "February",
									value    	 : "2"			
								},
								{
									label 	     : "March",
									value    	 : "3"			
								},
								{
									label 	     : "April",
									value    	 : "4"			
								},
								{
									label 	     : "May",
									value    	 : "5"			
								},
								{
									label 	     : "June",
									value    	 : "6"			
								},
								{
									label 	     : "July",
									value    	 : "7"			
								},
								{
									label 	     : "August",
									value    	 : "8"			
								},
								{
									label 	     : "September",
									value    	 : "9"			
								},
								{
									label 	     : "October",
									value    	 : "10"			
								},
								{
									label 	     : "Novemmber",
									value    	 : "11"			
								},
								{
									label 	     : "December",
									value    	 : "12"			
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


__API_PATH.CURRENCY_LIST  =	{
    "USD": {
        "symbol": "$",
        "name": "US Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "USD",
        "name_plural": "US dollars"
    },
    "CAD": {
        "symbol": "CA$",
        "name": "Canadian Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "CAD",
        "name_plural": "Canadian dollars"
    },
    "EUR": {
        "symbol": "€",
        "name": "Euro",
        "symbol_native": "€",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "EUR",
        "name_plural": "euros"
    },
    "AED": {
        "symbol": "AED",
        "name": "United Arab Emirates Dirham",
        "symbol_native": "د.إ.‏",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "AED",
        "name_plural": "UAE dirhams"
    },
    "AFN": {
        "symbol": "Af",
        "name": "Afghan Afghani",
        "symbol_native": "؋",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "AFN",
        "name_plural": "Afghan Afghanis"
    },
    "ALL": {
        "symbol": "ALL",
        "name": "Albanian Lek",
        "symbol_native": "Lek",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "ALL",
        "name_plural": "Albanian lekë"
    },
    "AMD": {
        "symbol": "AMD",
        "name": "Armenian Dram",
        "symbol_native": "դր.",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "AMD",
        "name_plural": "Armenian drams"
    },
    "ARS": {
        "symbol": "AR$",
        "name": "Argentine Peso",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "ARS",
        "name_plural": "Argentine pesos"
    },
    "AUD": {
        "symbol": "AU$",
        "name": "Australian Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "AUD",
        "name_plural": "Australian dollars"
    },
    "AZN": {
        "symbol": "man.",
        "name": "Azerbaijani Manat",
        "symbol_native": "ман.",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "AZN",
        "name_plural": "Azerbaijani manats"
    },
    "BAM": {
        "symbol": "KM",
        "name": "Bosnia-Herzegovina Convertible Mark",
        "symbol_native": "KM",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "BAM",
        "name_plural": "Bosnia-Herzegovina convertible marks"
    },
    "BDT": {
        "symbol": "Tk",
        "name": "Bangladeshi Taka",
        "symbol_native": "৳",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "BDT",
        "name_plural": "Bangladeshi takas"
    },
    "BGN": {
        "symbol": "BGN",
        "name": "Bulgarian Lev",
        "symbol_native": "лв.",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "BGN",
        "name_plural": "Bulgarian leva"
    },
    "BHD": {
        "symbol": "BD",
        "name": "Bahraini Dinar",
        "symbol_native": "د.ب.‏",
        "decimal_digits": 3,
        "rounding": 0,
        "code": "BHD",
        "name_plural": "Bahraini dinars"
    },
    "BIF": {
        "symbol": "FBu",
        "name": "Burundian Franc",
        "symbol_native": "FBu",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "BIF",
        "name_plural": "Burundian francs"
    },
    "BND": {
        "symbol": "BN$",
        "name": "Brunei Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "BND",
        "name_plural": "Brunei dollars"
    },
    "BOB": {
        "symbol": "Bs",
        "name": "Bolivian Boliviano",
        "symbol_native": "Bs",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "BOB",
        "name_plural": "Bolivian bolivianos"
    },
    "BRL": {
        "symbol": "R$",
        "name": "Brazilian Real",
        "symbol_native": "R$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "BRL",
        "name_plural": "Brazilian reals"
    },
    "BWP": {
        "symbol": "BWP",
        "name": "Botswanan Pula",
        "symbol_native": "P",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "BWP",
        "name_plural": "Botswanan pulas"
    },
    "BYR": {
        "symbol": "BYR",
        "name": "Belarusian Ruble",
        "symbol_native": "BYR",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "BYR",
        "name_plural": "Belarusian rubles"
    },
    "BZD": {
        "symbol": "BZ$",
        "name": "Belize Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "BZD",
        "name_plural": "Belize dollars"
    },
    "CDF": {
        "symbol": "CDF",
        "name": "Congolese Franc",
        "symbol_native": "FrCD",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "CDF",
        "name_plural": "Congolese francs"
    },
    "CHF": {
        "symbol": "CHF",
        "name": "Swiss Franc",
        "symbol_native": "CHF",
        "decimal_digits": 2,
        "rounding": 0.05,
        "code": "CHF",
        "name_plural": "Swiss francs"
    },
    "CLP": {
        "symbol": "CL$",
        "name": "Chilean Peso",
        "symbol_native": "$",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "CLP",
        "name_plural": "Chilean pesos"
    },
    "CNY": {
        "symbol": "CN¥",
        "name": "Chinese Yuan",
        "symbol_native": "CN¥",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "CNY",
        "name_plural": "Chinese yuan"
    },
    "COP": {
        "symbol": "CO$",
        "name": "Colombian Peso",
        "symbol_native": "$",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "COP",
        "name_plural": "Colombian pesos"
    },
    "CRC": {
        "symbol": "₡",
        "name": "Costa Rican Colón",
        "symbol_native": "₡",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "CRC",
        "name_plural": "Costa Rican colóns"
    },
    "CVE": {
        "symbol": "CV$",
        "name": "Cape Verdean Escudo",
        "symbol_native": "CV$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "CVE",
        "name_plural": "Cape Verdean escudos"
    },
    "CZK": {
        "symbol": "Kč",
        "name": "Czech Republic Koruna",
        "symbol_native": "Kč",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "CZK",
        "name_plural": "Czech Republic korunas"
    },
    "DJF": {
        "symbol": "Fdj",
        "name": "Djiboutian Franc",
        "symbol_native": "Fdj",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "DJF",
        "name_plural": "Djiboutian francs"
    },
    "DKK": {
        "symbol": "Dkr",
        "name": "Danish Krone",
        "symbol_native": "kr",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "DKK",
        "name_plural": "Danish kroner"
    },
    "DOP": {
        "symbol": "RD$",
        "name": "Dominican Peso",
        "symbol_native": "RD$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "DOP",
        "name_plural": "Dominican pesos"
    },
    "DZD": {
        "symbol": "DA",
        "name": "Algerian Dinar",
        "symbol_native": "د.ج.‏",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "DZD",
        "name_plural": "Algerian dinars"
    },
    "EEK": {
        "symbol": "Ekr",
        "name": "Estonian Kroon",
        "symbol_native": "kr",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "EEK",
        "name_plural": "Estonian kroons"
    },
    "EGP": {
        "symbol": "EGP",
        "name": "Egyptian Pound",
        "symbol_native": "ج.م.‏",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "EGP",
        "name_plural": "Egyptian pounds"
    },
    "ERN": {
        "symbol": "Nfk",
        "name": "Eritrean Nakfa",
        "symbol_native": "Nfk",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "ERN",
        "name_plural": "Eritrean nakfas"
    },
    "ETB": {
        "symbol": "Br",
        "name": "Ethiopian Birr",
        "symbol_native": "Br",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "ETB",
        "name_plural": "Ethiopian birrs"
    },
    "GBP": {
        "symbol": "£",
        "name": "British Pound Sterling",
        "symbol_native": "£",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "GBP",
        "name_plural": "British pounds sterling"
    },
    "GEL": {
        "symbol": "GEL",
        "name": "Georgian Lari",
        "symbol_native": "GEL",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "GEL",
        "name_plural": "Georgian laris"
    },
    "GHS": {
        "symbol": "GH₵",
        "name": "Ghanaian Cedi",
        "symbol_native": "GH₵",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "GHS",
        "name_plural": "Ghanaian cedis"
    },
    "GNF": {
        "symbol": "FG",
        "name": "Guinean Franc",
        "symbol_native": "FG",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "GNF",
        "name_plural": "Guinean francs"
    },
    "GTQ": {
        "symbol": "GTQ",
        "name": "Guatemalan Quetzal",
        "symbol_native": "Q",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "GTQ",
        "name_plural": "Guatemalan quetzals"
    },
    "HKD": {
        "symbol": "HK$",
        "name": "Hong Kong Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "HKD",
        "name_plural": "Hong Kong dollars"
    },
    "HNL": {
        "symbol": "HNL",
        "name": "Honduran Lempira",
        "symbol_native": "L",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "HNL",
        "name_plural": "Honduran lempiras"
    },
    "HRK": {
        "symbol": "kn",
        "name": "Croatian Kuna",
        "symbol_native": "kn",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "HRK",
        "name_plural": "Croatian kunas"
    },
    "HUF": {
        "symbol": "Ft",
        "name": "Hungarian Forint",
        "symbol_native": "Ft",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "HUF",
        "name_plural": "Hungarian forints"
    },
    "IDR": {
        "symbol": "Rp",
        "name": "Indonesian Rupiah",
        "symbol_native": "Rp",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "IDR",
        "name_plural": "Indonesian rupiahs"
    },
    "ILS": {
        "symbol": "₪",
        "name": "Israeli New Sheqel",
        "symbol_native": "₪",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "ILS",
        "name_plural": "Israeli new sheqels"
    },
    "INR": {
        "symbol": "Rs",
        "name": "Indian Rupee",
        "symbol_native": "টকা",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "INR",
        "name_plural": "Indian rupees"
    },
    "IQD": {
        "symbol": "IQD",
        "name": "Iraqi Dinar",
        "symbol_native": "د.ع.‏",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "IQD",
        "name_plural": "Iraqi dinars"
    },
    "IRR": {
        "symbol": "IRR",
        "name": "Iranian Rial",
        "symbol_native": "﷼",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "IRR",
        "name_plural": "Iranian rials"
    },
    "ISK": {
        "symbol": "Ikr",
        "name": "Icelandic Króna",
        "symbol_native": "kr",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "ISK",
        "name_plural": "Icelandic krónur"
    },
    "JMD": {
        "symbol": "J$",
        "name": "Jamaican Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "JMD",
        "name_plural": "Jamaican dollars"
    },
    "JOD": {
        "symbol": "JD",
        "name": "Jordanian Dinar",
        "symbol_native": "د.أ.‏",
        "decimal_digits": 3,
        "rounding": 0,
        "code": "JOD",
        "name_plural": "Jordanian dinars"
    },
    "JPY": {
        "symbol": "¥",
        "name": "Japanese Yen",
        "symbol_native": "￥",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "JPY",
        "name_plural": "Japanese yen"
    },
    "KES": {
        "symbol": "Ksh",
        "name": "Kenyan Shilling",
        "symbol_native": "Ksh",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "KES",
        "name_plural": "Kenyan shillings"
    },
    "KHR": {
        "symbol": "KHR",
        "name": "Cambodian Riel",
        "symbol_native": "៛",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "KHR",
        "name_plural": "Cambodian riels"
    },
    "KMF": {
        "symbol": "CF",
        "name": "Comorian Franc",
        "symbol_native": "FC",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "KMF",
        "name_plural": "Comorian francs"
    },
    "KRW": {
        "symbol": "₩",
        "name": "South Korean Won",
        "symbol_native": "₩",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "KRW",
        "name_plural": "South Korean won"
    },
    "KWD": {
        "symbol": "KD",
        "name": "Kuwaiti Dinar",
        "symbol_native": "د.ك.‏",
        "decimal_digits": 3,
        "rounding": 0,
        "code": "KWD",
        "name_plural": "Kuwaiti dinars"
    },
    "KZT": {
        "symbol": "KZT",
        "name": "Kazakhstani Tenge",
        "symbol_native": "тңг.",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "KZT",
        "name_plural": "Kazakhstani tenges"
    },
    "LBP": {
        "symbol": "LB£",
        "name": "Lebanese Pound",
        "symbol_native": "ل.ل.‏",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "LBP",
        "name_plural": "Lebanese pounds"
    },
    "LKR": {
        "symbol": "SLRs",
        "name": "Sri Lankan Rupee",
        "symbol_native": "SL Re",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "LKR",
        "name_plural": "Sri Lankan rupees"
    },
    "LTL": {
        "symbol": "Lt",
        "name": "Lithuanian Litas",
        "symbol_native": "Lt",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "LTL",
        "name_plural": "Lithuanian litai"
    },
    "LVL": {
        "symbol": "Ls",
        "name": "Latvian Lats",
        "symbol_native": "Ls",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "LVL",
        "name_plural": "Latvian lati"
    },
    "LYD": {
        "symbol": "LD",
        "name": "Libyan Dinar",
        "symbol_native": "د.ل.‏",
        "decimal_digits": 3,
        "rounding": 0,
        "code": "LYD",
        "name_plural": "Libyan dinars"
    },
    "MAD": {
        "symbol": "MAD",
        "name": "Moroccan Dirham",
        "symbol_native": "د.م.‏",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "MAD",
        "name_plural": "Moroccan dirhams"
    },
    "MDL": {
        "symbol": "MDL",
        "name": "Moldovan Leu",
        "symbol_native": "MDL",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "MDL",
        "name_plural": "Moldovan lei"
    },
    "MGA": {
        "symbol": "MGA",
        "name": "Malagasy Ariary",
        "symbol_native": "MGA",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "MGA",
        "name_plural": "Malagasy Ariaries"
    },
    "MKD": {
        "symbol": "MKD",
        "name": "Macedonian Denar",
        "symbol_native": "MKD",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "MKD",
        "name_plural": "Macedonian denari"
    },
    "MMK": {
        "symbol": "MMK",
        "name": "Myanma Kyat",
        "symbol_native": "K",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "MMK",
        "name_plural": "Myanma kyats"
    },
    "MOP": {
        "symbol": "MOP$",
        "name": "Macanese Pataca",
        "symbol_native": "MOP$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "MOP",
        "name_plural": "Macanese patacas"
    },
    "MUR": {
        "symbol": "MURs",
        "name": "Mauritian Rupee",
        "symbol_native": "MURs",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "MUR",
        "name_plural": "Mauritian rupees"
    },
    "MXN": {
        "symbol": "MX$",
        "name": "Mexican Peso",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "MXN",
        "name_plural": "Mexican pesos"
    },
    "MYR": {
        "symbol": "RM",
        "name": "Malaysian Ringgit",
        "symbol_native": "RM",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "MYR",
        "name_plural": "Malaysian ringgits"
    },
    "MZN": {
        "symbol": "MTn",
        "name": "Mozambican Metical",
        "symbol_native": "MTn",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "MZN",
        "name_plural": "Mozambican meticals"
    },
    "NAD": {
        "symbol": "N$",
        "name": "Namibian Dollar",
        "symbol_native": "N$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "NAD",
        "name_plural": "Namibian dollars"
    },
    "NGN": {
        "symbol": "₦",
        "name": "Nigerian Naira",
        "symbol_native": "₦",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "NGN",
        "name_plural": "Nigerian nairas"
    },
    "NIO": {
        "symbol": "C$",
        "name": "Nicaraguan Córdoba",
        "symbol_native": "C$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "NIO",
        "name_plural": "Nicaraguan córdobas"
    },
    "NOK": {
        "symbol": "Nkr",
        "name": "Norwegian Krone",
        "symbol_native": "kr",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "NOK",
        "name_plural": "Norwegian kroner"
    },
    "NPR": {
        "symbol": "NPRs",
        "name": "Nepalese Rupee",
        "symbol_native": "नेरू",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "NPR",
        "name_plural": "Nepalese rupees"
    },
    "NZD": {
        "symbol": "NZ$",
        "name": "New Zealand Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "NZD",
        "name_plural": "New Zealand dollars"
    },
    "OMR": {
        "symbol": "OMR",
        "name": "Omani Rial",
        "symbol_native": "ر.ع.‏",
        "decimal_digits": 3,
        "rounding": 0,
        "code": "OMR",
        "name_plural": "Omani rials"
    },
    "PAB": {
        "symbol": "B/.",
        "name": "Panamanian Balboa",
        "symbol_native": "B/.",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "PAB",
        "name_plural": "Panamanian balboas"
    },
    "PEN": {
        "symbol": "S/.",
        "name": "Peruvian Nuevo Sol",
        "symbol_native": "S/.",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "PEN",
        "name_plural": "Peruvian nuevos soles"
    },
    "PHP": {
        "symbol": "₱",
        "name": "Philippine Peso",
        "symbol_native": "₱",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "PHP",
        "name_plural": "Philippine pesos"
    },
    "PKR": {
        "symbol": "PKRs",
        "name": "Pakistani Rupee",
        "symbol_native": "₨",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "PKR",
        "name_plural": "Pakistani rupees"
    },
    "PLN": {
        "symbol": "zł",
        "name": "Polish Zloty",
        "symbol_native": "zł",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "PLN",
        "name_plural": "Polish zlotys"
    },
    "PYG": {
        "symbol": "₲",
        "name": "Paraguayan Guarani",
        "symbol_native": "₲",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "PYG",
        "name_plural": "Paraguayan guaranis"
    },
    "QAR": {
        "symbol": "QR",
        "name": "Qatari Rial",
        "symbol_native": "ر.ق.‏",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "QAR",
        "name_plural": "Qatari rials"
    },
    "RON": {
        "symbol": "RON",
        "name": "Romanian Leu",
        "symbol_native": "RON",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "RON",
        "name_plural": "Romanian lei"
    },
    "RSD": {
        "symbol": "din.",
        "name": "Serbian Dinar",
        "symbol_native": "дин.",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "RSD",
        "name_plural": "Serbian dinars"
    },
    "RUB": {
        "symbol": "RUB",
        "name": "Russian Ruble",
        "symbol_native": "руб.",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "RUB",
        "name_plural": "Russian rubles"
    },
    "RWF": {
        "symbol": "RWF",
        "name": "Rwandan Franc",
        "symbol_native": "FR",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "RWF",
        "name_plural": "Rwandan francs"
    },
    "SAR": {
        "symbol": "SR",
        "name": "Saudi Riyal",
        "symbol_native": "ر.س.‏",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "SAR",
        "name_plural": "Saudi riyals"
    },
    "SDG": {
        "symbol": "SDG",
        "name": "Sudanese Pound",
        "symbol_native": "SDG",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "SDG",
        "name_plural": "Sudanese pounds"
    },
    "SEK": {
        "symbol": "Skr",
        "name": "Swedish Krona",
        "symbol_native": "kr",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "SEK",
        "name_plural": "Swedish kronor"
    },
    "SGD": {
        "symbol": "S$",
        "name": "Singapore Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "SGD",
        "name_plural": "Singapore dollars"
    },
    "SOS": {
        "symbol": "Ssh",
        "name": "Somali Shilling",
        "symbol_native": "Ssh",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "SOS",
        "name_plural": "Somali shillings"
    },
    "SYP": {
        "symbol": "SY£",
        "name": "Syrian Pound",
        "symbol_native": "ل.س.‏",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "SYP",
        "name_plural": "Syrian pounds"
    },
    "THB": {
        "symbol": "฿",
        "name": "Thai Baht",
        "symbol_native": "฿",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "THB",
        "name_plural": "Thai baht"
    },
    "TND": {
        "symbol": "DT",
        "name": "Tunisian Dinar",
        "symbol_native": "د.ت.‏",
        "decimal_digits": 3,
        "rounding": 0,
        "code": "TND",
        "name_plural": "Tunisian dinars"
    },
    "TOP": {
        "symbol": "T$",
        "name": "Tongan Paʻanga",
        "symbol_native": "T$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "TOP",
        "name_plural": "Tongan paʻanga"
    },
    "TRY": {
        "symbol": "TL",
        "name": "Turkish Lira",
        "symbol_native": "TL",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "TRY",
        "name_plural": "Turkish Lira"
    },
    "TTD": {
        "symbol": "TT$",
        "name": "Trinidad and Tobago Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "TTD",
        "name_plural": "Trinidad and Tobago dollars"
    },
    "TWD": {
        "symbol": "NT$",
        "name": "New Taiwan Dollar",
        "symbol_native": "NT$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "TWD",
        "name_plural": "New Taiwan dollars"
    },
    "TZS": {
        "symbol": "TSh",
        "name": "Tanzanian Shilling",
        "symbol_native": "TSh",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "TZS",
        "name_plural": "Tanzanian shillings"
    },
    "UAH": {
        "symbol": "₴",
        "name": "Ukrainian Hryvnia",
        "symbol_native": "₴",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "UAH",
        "name_plural": "Ukrainian hryvnias"
    },
    "UGX": {
        "symbol": "USh",
        "name": "Ugandan Shilling",
        "symbol_native": "USh",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "UGX",
        "name_plural": "Ugandan shillings"
    },
    "UYU": {
        "symbol": "$U",
        "name": "Uruguayan Peso",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "UYU",
        "name_plural": "Uruguayan pesos"
    },
    "UZS": {
        "symbol": "UZS",
        "name": "Uzbekistan Som",
        "symbol_native": "UZS",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "UZS",
        "name_plural": "Uzbekistan som"
    },
    "VEF": {
        "symbol": "Bs.F.",
        "name": "Venezuelan Bolívar",
        "symbol_native": "Bs.F.",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "VEF",
        "name_plural": "Venezuelan bolívars"
    },
    "VND": {
        "symbol": "₫",
        "name": "Vietnamese Dong",
        "symbol_native": "₫",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "VND",
        "name_plural": "Vietnamese dong"
    },
    "XAF": {
        "symbol": "FCFA",
        "name": "CFA Franc BEAC",
        "symbol_native": "FCFA",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "XAF",
        "name_plural": "CFA francs BEAC"
    },
    "XOF": {
        "symbol": "CFA",
        "name": "CFA Franc BCEAO",
        "symbol_native": "CFA",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "XOF",
        "name_plural": "CFA francs BCEAO"
    },
    "YER": {
        "symbol": "YR",
        "name": "Yemeni Rial",
        "symbol_native": "ر.ي.‏",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "YER",
        "name_plural": "Yemeni rials"
    },
    "ZAR": {
        "symbol": "R",
        "name": "South African Rand",
        "symbol_native": "R",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "ZAR",
        "name_plural": "South African rand"
    },
    "ZMK": {
        "symbol": "ZK",
        "name": "Zambian Kwacha",
        "symbol_native": "ZK",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "ZMK",
        "name_plural": "Zambian kwachas"
    }
};
'use strict';

app.factory('AuthSrv', function () {
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
.run(['$location','$rootScope','localStorageService','AuthSrv',
	function($location, $rootScope,localStorageService,AuthSrv){   	
        
        
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
                }else {
                   
                    var token = localStorageService.get('token');
                    if(($location.path() === '/login' || $location.path() === '/') && token ){           
                       $location.path("/dashboard");
                    }
                }
        });


        /*$rootScope.$on("$routeChangeSuccess", 
            function (event, nextRoute, currentRoute) {
            
           if(nextRoute.$$route){
                if(nextRoute.$$route.access){
                    $rootScope.isAuth= nextRoute.$$route.access;                    
               } 
           }
            
        });*/
    	
    	
    	/* This will logout the user from the application */
    	$rootScope.clearToken = function () {
            localStorageService.remove('token');
            localStorageService.remove('user');
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
    .when('/',  {
       templateUrl : "/modules/login/views/login.tpl.html",
        controller: "loginController",
        access: {
            requiredLogin: false
        }
    })

    .when("/login", {
        templateUrl : "/modules/login/views/login.html",
        controller: "loginController",
        access: {
            requiredLogin: false
        }
    })
     .when("/resetpassword/:token", {
        templateUrl : "/modules/login/views/resetpassword.html",
        controller  :  "resetPasswordCtlr",
        access: {
            requiredLogin: false,
        }
    })

    .when("/register", {
        templateUrl : "/modules/register/views/register.tpl.html",
        controller  :  "registerController",
        access: {
            requiredLogin: false
        }
    })
    .when("/dashboard", {
        templateUrl : "/modules/dashboard/views/dashboard-home.html",
        controller  :  "dashboardController",
        access: {
            requiredLogin: true, 
            headerType:'hotel_header',
            sidebar: 'yes',
            outside:'yes'
        }
    })

   
    .when("/dashboard/jot", {
        templateUrl : "/modules/jot/views/dashboard-jot.html",
        controller  :  "jotController",
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
        templateUrl : "/modules/employee/views/employee_schedule.html",
        controller  :  "employeeScheduleController",
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
        templateUrl : "/modules/vending_machine/views/inventory_category.html",
        controller  :  "inventoryCatController",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })
   .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);     
}]);
"use strict";

/**************************************
* Login controller
**************************************/


app.controller('dashboardController', ['$scope','$location','$timeout','localStorageService','dashboardFactory','$rootScope','$mdDialog','toastService',
	function($scope,$location,$timeout, localStorageService,dashboardFactory,$rootScope,$mdDialog,toastService) {	

		/*
		* Function
		*
		* Open popup to add new hotel.
		*
		*/

		$scope.openAddHotelPopup = function(){
			$mdDialog.show({
				controller:'dashboardPopupController',	          
				templateUrl: '/modules/dashboard/views/add-new-hotel.tpl.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true,
			})
			.then(function(answer) {
			}, function() {

			});

		};



		/*
		* Factory method
		*
		* Display hotels
		*
		*/

		/*var data = {
				"user_id":localStorageService.get('user')._id
			};
		var request={
				url:window.__API_PATH.GET_HOTELS,
				method:"POST",
				data:data
			};
		
		dashboardFactory.hotelCRUD(request).then(function(response){
			if(response.error){
			} else {				
				$rootScope.hotels = response.result;
			}
		});*/


		/*
		* Function
		*
		* Set hotel id in local storage and redirect to jot related to selected hotel
		*
		*/
		

		$scope.redirectToJot = function(hotel){

			/*var hotelData  = {
					'hotel_id'   :hotelID,
					'hotel_name' :hotelName
				};*/	
			localStorageService.set('hotel', hotel);			
			$location.path('/dashboard/jot');
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
			
			dashboardFactory.hotelCRUD(request).then(function(response){
				if(response.error){
				} else {				
					if(response.success)
					{
						var popup = {"message":response.message,"class":"success"};
						toastService.alert(popup);
					}
				}
			});		
		};


	}
]);

"use strict";

/**************************************
* Login controller
**************************************/


app.controller('dashboardPopupController', ['$scope','$http','$location','$timeout','localStorageService','dashboardFactory','$rootScope','$mdDialog','$route','toastService',
	function($scope,$http,$location,$timeout, localStorageService,dashboardFactory,$rootScope,$mdDialog,$route,toastService) {	


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

				dashboardFactory.hotelCRUD(request).then(function(response){								
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



'use strict';

app.factory('dashboardFactory', ['$http', function ($http) {
	return{		
		
		hotelCRUD: function(obj){
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

app.controller('departmentController', ['$scope','localStorageService','globalRequest','$mdDialog',
	function($scope,localStorageService,globalRequest,$mdDialog) {
		var hotel = localStorageService.get('hotel');


		/************************************
		* Blank all field before open form
		*************************************/	

		$scope.blank = function(){
			$scope.department_name = "";		
			$scope.department_abbreviation = "";		
			$scope.department_desc = "";
		}

		$scope.blankFields = function(){
			$scope.blank();
			$scope.departmentResult = "";
		}

		
		/************************************
		* Get department list
		*************************************/			
		
		var request = {
		            url:window.__API_PATH.GET_DEPARTMENTS,
		            method:"GET",
		            params:{
		            	hotel_id    :  hotel._id		
		            }
		          };
		globalRequest.jotCRUD(request).then(function(response){				
		 	$scope.departmentList = response.result;
		 });		


		 /************************************
		* Add employee
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

app.controller('editDepartmentController', ['$scope','localStorageService','globalRequest','Upload','$timeout','deptDetail','$route','$mdDialog',
	function($scope,localStorageService,globalRequest,Upload,$timeout,deptDetail,$route,$mdDialog) {
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
			            	description        :  $scope.description
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){
			 	$scope.departmentEditResult = response;
			 	if(response.status ==1)
			 	{
			 		$mdDialog.cancel();
			 		$route.reload();
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

app.controller('editEmployeeController', ['$scope','localStorageService','globalRequest','Upload','$timeout','empDetail','$route','$mdDialog',
	function($scope,localStorageService,globalRequest,Upload,$timeout,empDetail,$route,$mdDialog) {
		var hotel = localStorageService.get('hotel');

		
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
			            	user_name     :  $scope.user_name || null,
			            	email         :  $scope.email || null,
			            	status 		  :  status,
			            	department    :  $scope.department,
			            	profile_image :  $scope.profileimages,
			            	position 	  :  $scope.position,
			            	password      :  '123456',
			            }
			          };

			globalRequest.jotCRUD(request).then(function(response){
			 	$scope.memberEditResult = response;
			 	if(response.status ==1)
			 	{
			 		$mdDialog.cancel();
			 		$route.reload();
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

app.controller('employeeController', ['$scope','localStorageService','globalRequest','Upload','$timeout','$mdDialog','$route','toastService',
	function($scope,localStorageService,globalRequest,Upload,$timeout,$mdDialog,$route,toastService) {
		var hotel = localStorageService.get('hotel');


		/************************************
		* Blank all field before open form
		*************************************/

		$scope.blank = function(){
			$scope.first_name = "";
			$scope.last_name = "";
			$scope.user_name = "";
			$scope.email = "";
			$scope.department = "";
			$scope.position = "";
			$scope.status = "";
			$scope.address = "";
			$scope.profile = "";
			$scope.profileProgress = -1;
		}

		$scope.blankFields = function(){
			$scope.blank();
			$scope.memberResult = "";
		}

		/************************************
		* Get department list
		*************************************/			
		
		var request = {
		            url:window.__API_PATH.GET_DEPARTMENTS,
		            method:"GET",
		            params:{
		            	hotel_id    :  hotel._id		
		            }
		          };
		globalRequest.jotCRUD(request).then(function(response){				
		 	$scope.departmentList = response.result;
		 });
		
		/************************************
		* Get employee list
		*************************************/		
		
			
			var request = {
			            url:window.__API_PATH.STAFF_SUGGESTION,
			            method:"GET",
			            params:{
			            	hotel_id    :  hotel._id		
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){
				
			 	$scope.membersList = response.result;
			});

		
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
			            	user_name     :  $scope.user_name,
			            	email         :  $scope.email,
			            	status 		  :  status,
			            	department    :  $scope.department,
			            	profile_image :  $scope.profileimages,
			            	position 	  :  $scope.position,
			            	role 	      :  'staff',
			            	password      :  '123456',
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){
			 	$scope.memberResult = response;
			 	$scope.blank();
			 	if(response.status == 1)
			 	{
			 		if(!$scope.membersList)
			 		{
			 			$scope.membersList = [];
			 		}
			 		$scope.membersList.push(response.result);
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

	    /*****************************************
		* Profile image upload
		*****************************************/

	    $scope.viewDetail = function(){

	    };
		
	}
]);




"use strict";

app.controller('employeeScheduleController', ['$scope','localStorageService','globalRequest',
	function($scope,localStorageService,globalRequest) {
		var hotel = localStorageService.get('hotel');

		
		/************************************
		* Get employee list
		*************************************/			
			
			var request = {
			            url:window.__API_PATH.STAFF_SUGGESTION,
			            method:"GET",
			            params:{
			            	hotel_id    :  hotel._id		
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){				
			 	$scope.membersList = response.result;
			 });		
		
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

app.controller('departmentCtlr', ['$scope','$rootScope','localStorageService','globalRequest',
	function($scope,$rootScope,localStorageService,globalRequest) {
		

		/*****************************************
		* Get department List
		******************************************/

		var hotel = localStorageService.get('hotel');
		var request= {
			url:window.__API_PATH.GET_DEPARTMENTS,
			method:"GET",
			params:{hotel_id: hotel._id}
		};
		globalRequest.jotCRUD(request)
		.then(function(response){
			$scope.departmentSuggetionList = response.result;
		});

	     
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
		
		$scope.edit_jot		   = jotData;
		
		$scope.jot_title	   = $scope.edit_jot.jot_data.jot_title;
		$rootScope.assigned_to = $scope.edit_jot.jot_data.assigned_to;
		$rootScope.due_date    = new Date($scope.edit_jot.jot_data.due_date);
		$rootScope.priority    = $scope.edit_jot.jot_data.priority;
		$rootScope.department  = $scope.edit_jot.jot_data.department;



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
		* Change status
		**************************************/

		$scope.changeStatus = function(){
			if($scope.edit_jot.jot_data.status == 'close')
			{
				$scope.edit_jot.jot_data.status = 'open';
			} else {
				$scope.edit_jot.jot_data.status = 'close';
			}

		};
		
		/**************************************
		* Update Jot
		**************************************/

		$scope.saveUpdateedJot = function(){
			$scope.edit_jot.jot_data.jot_id      = $scope.edit_jot.jot_data._id;
			$scope.edit_jot.jot_data.jot_title   = $scope.jot_title;
			$scope.edit_jot.jot_data.assigned_to = $rootScope.assigned_to;
			$scope.edit_jot.jot_data.due_date    = new Date($rootScope.due_date).getTime();
			$scope.edit_jot.jot_data.priority    = $rootScope.priority;
			$scope.edit_jot.jot_data.department  = $rootScope.department;
		

			var request={
				url:window.__API_PATH.UPDATE_JOT,
				method:"put",
				data:$scope.edit_jot.jot_data
			};

			globalRequest.jotCRUD(request).then(function(response){				
				$scope.result = {message:response.message,class:response.class}; 	
			});
		};

	
		/**************************************
		* Archive Jot
		**************************************/

		$scope.archiveJot = function(){
			var jotid = {jot_id:$scope.edit_jot.jot_data._id};

			var request={
				url:window.__API_PATH.DELETE_JOT,
				method:"DELETE",
				params:jotid
			};
			
			globalRequest.jotCRUD(request).then(function(response){				
				$route.reload();
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
				            	uploadedImagesName.push(data.filename);
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

app.controller('jotController', ['$scope','$location','globalRequest','$rootScope','$mdDialog','localStorageService',
	function($scope,$location,globalRequest,$rootScope,$mdDialog,localStorageService) {


		/**************************************
		* Redirect if hotel not selected
		**************************************/
		
		var hotel = localStorageService.get('hotel');

		if(!hotel || hotel == ""){
			$location.path('/dashboard');
		}

		/**************************************
		* Get jot list
		**************************************/
		$rootScope.task_iteration = [];
		$rootScope.task_iteration.data = [];
		$rootScope.task_iteration.type = [];
		$rootScope.note_iteration = [];
		$rootScope.note_iteration.data = [];
		$rootScope.note_iteration.type = [];
		$rootScope.issue_iteration = [];
		$rootScope.issue_iteration.data = [];
		$rootScope.issue_iteration.type = [];
		$rootScope.others_iteration = [];
		$rootScope.others_iteration.data = [];
		$rootScope.others_iteration.type = [];	


		var request= {
			url:window.__API_PATH.GET_JOT,
			method:"GET",
			params:{hotel_id :hotel._id}
		};	

		globalRequest.jotCRUD(request)
		.then(function(response){	

			angular.forEach(response.result,function(value,index){
				
				if(value._id == 'task')
				{
					$rootScope.task_iteration.data  = value.jot_data;
					$rootScope.task_iteration.type  = value._id;
				} else if(value._id == 'note') {
					$rootScope.note_iteration.data = value.jot_data;
					$rootScope.note_iteration.type  = value._id;
				} else if(value._id == 'issue') {
					$rootScope.issue_iteration.data  = value.jot_data;
					$rootScope.issue_iteration.type  = value._id;
				} else {
					$rootScope.others_iteration.data  = value.jot_data;
					$rootScope.others_iteration.type  = value._id;
				}  
		
			});
		});


		/**************************************
		* Edit jot popup
		**************************************/

		$scope.jotEditPopup = function(jotData,jotType){
		
			var data={jot_data:jotData,jot_type:jotType};
			$mdDialog.show({
				controller: 'editJotCtlr',
				templateUrl: '/modules/jot/views/edit_jot.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				locals: {jotData:data}
			})
			.then(function(answer) {
			
			}, function() {
			
			});

		};

				
	}
]);


"use strict";

app.controller('jotPopupCtrl', ['$scope','$rootScope','$mdDialog','ActivateTab','globalRequest',
	function($scope,$rootScope,$mdDialog,ActivateTab,globalRequest) {	
		/*
		* Activate tab
		*/
		$scope.currentNavItem   = ActivateTab;	

		/**********************************************************
	    * Get staff list
	    **********************************************************/

		globalRequest.getStaff();


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

            var template = '<div class="dropdown suggestions_list"><ul class="" style="display:block;" ng-hide="!ngModel.length || !filitered.length || selected"><li ng-repeat="item in filitered = (departmentypeahead | filterdepartment:this) track by $index" ng-click="click(item)" style="cursor:pointer" ng-class="{active:$index==active}" ng-mouseenter="mouseenter($index)"><a>{{item.department_name}}</a></li></ul></div>';

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

        			var selectedValue = "#"+item.department_name;

    
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
app.directive('jotFormSubmitDirectives', function($timeout, $parse,$rootScope, $mdDialog,toastService,globalRequest,localStorageService) {
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
              
              $scope.callbackTitleStaff = function(){                
                          $rootScope.titleFocus = true; 
              };

              /*
              * Blank field before open form
              */

              $rootScope.priority = $rootScope.due_date = $rootScope.department =  $rootScope.assigned_to = $rootScope.department = $rootScope.taskTime = $rootScope.start_recurring_date = $rootScope.end_recurring_date = $rootScope.jot_title = $rootScope.files  =  '';
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

                  
                  /**
                  ||  End task Jot Data json 
                  **/

                  $scope.message = ' ';

                  var hotel = localStorageService.get('hotel');
                  var jotDataArray = {
                      jot_title      : $rootScope.jot_title,
                      priority       : $rootScope.priority,
                      hotel_id       : hotel.hotel_id,
                      jot_type       : $rootScope.jot_type,
                      due_date       : new Date($rootScope.due_date).getTime(),
                      department     : $rootScope.department,
                      assigned_to    : $rootScope.assigned_to,
                      checklist      : $rootScope.checklist,  
                      image          : $rootScope.issueImages,
                      task_type      : task,
                      status         : 'open'
                  };

                  var request={
                    url:window.__API_PATH.CREATE_JOT,
                    method:"POST",
                    data:jotDataArray
                  };
                  
                  globalRequest.jotCRUD(request).then(function(response){
                    var result = response.result;
                    if(response.status == 1)
                    {
                      $mdDialog.cancel();
                      var popup = {"message":response.message,"class":"success"};
                      toastService.alert(popup);

                      
                      if($rootScope.jot_type == 'task')
                      {
                        $rootScope.task_iteration.data.push(result);
                      } else if($rootScope.jot_type == 'note') {
                        $rootScope.note_iteration.data.push(result);
                      } else if($rootScope.jot_type == 'issue') {
                        $rootScope.issue_iteration.data.push(result);
                      } else {
                        $rootScope.others_iteration.data.push(result);
                      }         

                      
                      

                      /******************************************************
                      * Jot object iteration
                      ****************************************************/

                      /*var keyFoundInObj = false;

                      angular.forEach($rootScope.jots,function(value,index){*/
                        

                        /******************************************************
                        * Check jot type(message,issue etc.) is new or already in object 
                        ****************************************************/
                               /* if(value._id == $rootScope.jot_type)
                                {                 
                                  value.jot_data.push(jotDataArray);
                                  keyFoundInObj = true;
                                }                   
                            });*/
                      

                            /******************************************************
                      * Push new jot data if  jot type(message,issue etc.) is not in jot object
                      ****************************************************/
                      
                      /*if(!keyFoundInObj)
                      {
                        var jotDataArrayInObj = [jotDataArray];
                              var newcreatedJot = {
                                            "_id"   :$rootScope.jot_type,
                                            "jot_data": jotDataArrayInObj
                                          };
                                                    
                              $rootScope.jots.push(newcreatedJot);
                            
                          }*/

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

app.directive('textareastaffsuggestion', ['$compile', '$timeout','$rootScope','replaceOccurence', function($compile, $timeout,$rootScope,replaceOccurence) {

    return {
        restrict: 'A',
        transclude: true,
        scope: {
            ngModel: '=',
            textareastaffsuggestion: '=',
            textareastaffsuggestionCallback: "="
        },
        link: function(scope, elem, attrs) {

              var template = '<div class="dropdown suggestions_list"><ul class="" style="display:block;" ng-hide="!ngModel.length || !filitered.length || selected"><li ng-repeat="item in filitered = (textareastaffsuggestion | filterstaffJotTitle:this) track by $index"  style="cursor:pointer" ng-class="{active:$index==active}" ng-click="click(item)" ng-mouseenter="mouseenter($index)"><a>{{item.first_name}} {{item.last_name}}({{item.user_name}})</a></li></ul></div>';

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

                      scope.$apply(function() {
                          scope.click(scope.filitered[scope.active]);
                      });
                  }
              });

              /***************************************************
              * Replace word with selected suggestion list item
              ***************************************************/

              scope.click = function(item) {
                
              	var replaceString     = scope.ngModel;
          			var replaceWord       = scope.matchWord;
                replaceWord           = replaceWord.split('@');
                replaceWord           = '@'+replaceWord[1];
          			var selectedValue     = "@"+item.user_name;

          			var replacedValue     = replaceOccurence.replaceAll(replaceString,replaceWord, selectedValue);
                
          				scope.ngModel = replacedValue;
          				scope.selected = item;
                  //scope.titleFocus = true;

                  if(scope.textareastaffsuggestionCallback) {
                      scope.textareastaffsuggestionCallback(item);
                  }
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
                  //var scrollTop = domElement.scrollTop;
                  domElement.value = domElement.value.substring(0, startPos) + val + domElement.value.substring(endPos, domElement.value.length);
                  domElement.selectionStart = startPos + val.length;
                  domElement.selectionEnd = startPos + val.length;
                  //domElement.scrollTop = scrollTop;

                  $timeout(function() {                        
                      domElement.focus();
                  });
                } else {
                  
                  domElement.value += val;
                  $timeout(function() {                        
                      domElement.focus();
                  });
                }

              }); 

            
        }
    };
}]).directive('focusTitle', function($timeout, $parse,$rootScope) {
      return {          

          link: function(scope, element, attrs) {

              var model = $parse(attrs.focusMe);
              $rootScope.$watch(function(value) {
                     if(value.titleFocus)
                     {            
                      $timeout(function() {                        
                          element[0].focus();
                          $rootScope.titleFocus = '';
                      });                      
                     }
              });
          }
      };
  });
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

            var template = '<div class="dropdown suggestions_list"><ul class="" style="display:block;" ng-hide="!ngModel.length || !filitered.length || selected"><li ng-repeat="item in filitered = (stafftypeahead | filterstaff:this) track by $index"  style="cursor:pointer" ng-class="{active:$index==active}" ng-click="click(item)" ng-mouseenter="mouseenter($index)"><a>{{item.first_name}} {{item.last_name}}({{item.user_name}})</a></li></ul></div>';

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

            var detectUserName = word.match(/\#[a-z]+/gm);
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

            var detectUserName = word.match(/\@[a-z]+/gm);
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



app.filter("filterstaffJotTitle", function(cursorPosition) {

         return function(input,scope) {
         		
	         	var text     = document.getElementById("jot_title");
				var caretPos = cursorPosition.GetCaretPosition(text);
	            var word     = cursorPosition.ReturnWord(text.value, caretPos);

	            var detectUserName = word.match(/\@[a-z]+/gm);
				var countAtRate    = word.match(/\@/gm);
						
				if(detectUserName)
				{

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
"use strict";

/**************************************
* Login controller
**************************************/


app.controller('loginController', ['$scope','$http','$location','$timeout','localStorageService','loginFactory','$rootScope','AuthSrv','$mdDialog',
	function($scope,$http,$location,$timeout, localStorageService,loginFactory,$rootScope,AuthSrv,$mdDialog) {	


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
				if(response.errors){
					//toastService.alert({message: response.errors.message, class: 'error'});
				} else {
					if(response.status == 1)
					{
						localStorageService.set('token', response.result.token);
						localStorageService.set('user', response.result.user);
						AuthSrv.isLogged = true;
						$location.path('/dashboard');
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
			});

		};

		/*********************************************
		* Redirect to signup form
		***********************************************/

		$scope.openSignupForm = function (obj) {
	           $location.path('/register');    
		};
	}
]);

"use strict";

/**************************************
* Login controller
http://localhost:3000/resetpassword/0c02baa57acfbb5a51cb0a04c587b8eec2099e3d
**************************************/


app.controller('resetPasswordCtlr', ['$scope','loginFactory','$rootScope','$routeParams','$location',
	function($scope,loginFactory,$rootScope,$routeParams,$location) {	
		console.log($routeParams);
		var token = $routeParams.token;
		
		

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
				});
			} else {
				$scope.resetResult.message = 'Password is not match with confirm password.';
				$scope.resetResult.class = 'Autherror';
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
			  lost_place 	 : $scope.lost_place,	
			  lost_date 	 : $scope.lost_date,				  
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

app.controller('headerController', ['$scope','$location','localStorageService','headerFactory','$rootScope','$mdDialog','$route','$timeout',
	function($scope,$location,localStorageService,headerFactory,$rootScope,$mdDialog,$route,$timeout) {	

		/*
		* Jot form tab list
		*/

		$rootScope.jotTypes        	= window.__API_PATH.JOT_TYPES;

		/*
		* Factory method
		*
		* Display hotels
		*
		*/
		
		var data = {
				"user_id":localStorageService.get('user')._id
			};

			
		var request={
				url:window.__API_PATH.GET_HOTELS,
				method:"GET",
				params:data
			};
		
		

		headerFactory.get(request).then(function(response){
			if(response.error){
			} else {				
				$rootScope.hotels = response.result;				
			}
		});


		/*
		* Function
		*
		* Set hotel id in local storage and redirect to jot related to selected hotel
		*
		*/
		$scope.hotel = localStorageService.get('hotel');
		$scope.changeJotView = function(hotel){
			/*var hotelData  = {
				'hotel_id':hotelID,
				'hotel_name':hotelName
			};*/
			localStorageService.set('hotel', hotel);
			$scope.hotel = hotel;
			$route.reload();
		};




		/**************************************
		* Open jot popup
		**************************************/
		$timeout(function(){

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
		});
		


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


	}
]);

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



app.factory('headerFactory', ['$http', function ($http) {
	return{	
		
		get: function(obj){
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

/**************************************
* Register controller
**************************************/


app.controller('registerController', ['$scope','registerFactory','$location',
	function($scope,registerFactory,$location) {

		$scope.registerUser = function (obj) {

	        var dataObj = {
					user_name   : $scope.name,
					email       : $scope.email,
					password    : $scope.password
			};

			var request={
					url:window.__API_PATH.REGISTER,
					method:"POST",
					data:dataObj
				};

			registerFactory.register(request).then(function(response){
				console.log(response);
				$scope.registerResult = response;				
			});       
		};	


		$scope.openLoginForm = function (obj) {	
	           $location.path('/');    
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

app.controller('editCategoryController', ['$scope','localStorageService','globalRequest','Upload','$timeout','catDetail','$route','$mdDialog',
	function($scope,localStorageService,globalRequest,Upload,$timeout,catDetail,$route,$mdDialog) {
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
			 		$route.reload();
			 	}

			 });
		};
		
	}
]);




"use strict";

app.controller('editInventoryController', ['$scope','localStorageService','globalRequest','Upload','$timeout','invDetail','$route','$mdDialog',
	function($scope,localStorageService,globalRequest,Upload,$timeout,invDetail,$route,$mdDialog) {
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
			 		$route.reload();
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
		}

		$scope.blankFields = function(){
			$scope.blank();
			$scope.inverntoryResult = "";
		}



		/************************************
		* Get Category list
		*************************************/			
			
		var request = {
		            url:window.__API_PATH.GET_INVENTORY_CATEGORY,
		            method:"GET",
		            params:{
		            	hotel_id    :  hotel._id		
		            }
		          };
		globalRequest.jotCRUD(request).then(function(response){				
		 	$scope.invtList = response.result;
		});

		
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
		}

		$scope.blankFields = function(){
			$scope.blank();
			$scope.inverntoryResult = "";
		}

		/************************************
		* Get item list
		*************************************/	
			var request = {
			            url:window.__API_PATH.GET_ITEMS,
			            method:"GET",
			            params:{
			            	hotel_id    :  hotel._id		
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){				
			 	$scope.inverntoryList = response.result;
			});


		/************************************
		* Get Category list
		*************************************/			
			
		var request = {
		            url:window.__API_PATH.GET_INVENTORY_CATEGORY,
		            method:"GET",
		            params:{
		            	hotel_id    :  hotel._id		
		            }
		          };
		globalRequest.jotCRUD(request).then(function(response){				
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
		$scope.productCategory  = [
										{label:'Confectionery'},
										{label:'Dried foods'},
										{label:'Dumplings'},
										{label:'Fast food'},
										{label:'Pastes'},
										{label:'Spreads'},
										{label:'Noodles'},
										{label:'Dips'},
										{label:'Soups'}
								   ];		

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
			
			item.quantity   = quantity;
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

		
	};

}]);
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