/* global _ */
export class Cookie {
	static set(cname, cvalue, exdays) {
		let _value = cvalue;
		if( _.isObject(cvalue) ) {
			_value = JSON.stringify(cvalue);
		}
	    let d = new Date();
	    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	    let expires = `expires=${d.toUTCString()}`;
	    document.cookie = `SocialProof.${cname}=${encodeURIComponent(_value)};${expires};path=/`;
	}

	static get(cname) {
	    let name = `SocialProof.${cname}=`;
	    let ca = document.cookie.split(';');
	    for(let i = 0; i < ca.length; i++) {
	        let c = ca[i];
	        while (c.charAt(0) === ' ') {
	            c = c.substring(1);
	        }
	        if (c.indexOf(name) === 0) {
	        	try{
	        		return JSON.parse(decodeURIComponent(c.substring(name.length, c.length)));	
	        	} catch(e) {
	        		return decodeURIComponent(c.substring(name.length, c.length));	
	        	}
	        }
	    }
	    return undefined;
	}
	static delete(cname) {
		document.cookie = `SocialProof.${cname}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
	}
	static check(cname) {
	    return  Cookie.get(cname) ? true : false;
	}
}