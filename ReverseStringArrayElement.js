let name = "hello world good morning.";

let str = " "
for (let i = 0; i < name.length; i++) {
    if (name[i] != ' ' && i != name.length - 1) {
        str = str + name[i];
    } else if (name[i] == ' ' || i == name.length - 1) {
        let res = reverse(str);
        console.log(res);
        str = " ";
    }
}

function reverse(str) {
    let str2 = str.split('');
    for (let i = 0; i < str2.length / 2; i++) {
        let temp = str2[i];
        str2[i] = str2[str2.length - 1 - i];
        str2[str2.length - 1 - i] = temp;
    }
    str = str2.join('');
    return str;
}
