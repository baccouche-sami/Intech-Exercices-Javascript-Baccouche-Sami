function restrict(obj1, obj2) {


}



const config = { user: "user", pass: "pass" };
const tooMuchConfig = { vars: "LOG=info", user: "user", pass: "pass", env: "prod" };
"vars" in tooMuchConfig; // => true
"env" in tooMuchConfig; // => true

const properConfig = restrict(tooMuchConfig, config);
properConfig === config; // => false
"vars" in properConfig; // => false
"env" in properConfig; // => false