const axios = require('axios');



async function inianu(isi) {
    switch (isi) {
        case 'await': 
            try {
                var res = await axios('http;//example.com')
                console.log(res.status)
            } catch {
                console.log('emror')
            }
        break;
        
        case 'noawait':
            axios('huh').then((res) => {
                console.log(res.status)
            }).catch((e) => {
                console.log('emror lagi')
            })
        break;
    }
}

inianu('await');
inianu('noawait')


//DEBAT panas drek
