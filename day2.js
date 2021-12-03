//day two part one
//pretty much the same as below, commented out

//day two part two
var directions = [{'x':'forward','y':'8'},{'x':'down','y':'6'},{'x':'down','y':'8'},{'x':'forward','y':'7'},{'x':'down','y':'5'},{'x':'up','y':'2'},{'x':'down','y':'3'},{'x':'down','y':'7'},{'x':'down','y':'8'},{'x':'down','y':'8'},{'x':'down','y':'8'},{'x':'down','y':'2'},{'x':'up','y':'1'},{'x':'down','y':'3'},{'x':'up','y':'2'},{'x':'down','y':'4'},{'x':'down','y':'2'},{'x':'forward','y':'6'},{'x':'forward','y':'4'},{'x':'down','y':'3'},{'x':'down','y':'2'},{'x':'forward','y':'2'},{'x':'forward','y':'1'},{'x':'forward','y':'4'},{'x':'forward','y':'5'},{'x':'forward','y':'8'},{'x':'down','y':'1'},{'x':'down','y':'4'},{'x':'up','y':'5'},{'x':'up','y':'2'},{'x':'forward','y':'3'},{'x':'down','y':'9'},{'x':'forward','y':'7'},{'x':'forward','y':'9'},{'x':'forward','y':'9'},{'x':'forward','y':'8'},{'x':'down','y':'1'},{'x':'down','y':'2'},{'x':'forward','y':'7'},{'x':'down','y':'3'},{'x':'forward','y':'6'},{'x':'down','y':'4'},{'x':'forward','y':'7'},{'x':'down','y':'1'},{'x':'up','y':'8'},{'x':'forward','y':'3'},{'x':'down','y':'1'},{'x':'forward','y':'7'},{'x':'up','y':'1'},{'x':'forward','y':'8'},{'x':'up','y':'6'},{'x':'up','y':'2'},{'x':'down','y':'6'},{'x':'forward','y':'1'},{'x':'up','y':'6'},{'x':'forward','y':'5'},{'x':'down','y':'9'},{'x':'up','y':'5'},{'x':'forward','y':'7'},{'x':'forward','y':'9'},{'x':'down','y':'9'},{'x':'down','y':'3'},{'x':'forward','y':'7'},{'x':'forward','y':'8'},{'x':'forward','y':'3'},{'x':'forward','y':'9'},{'x':'forward','y':'7'},{'x':'down','y':'3'},{'x':'down','y':'7'},{'x':'down','y':'4'},{'x':'forward','y':'2'},{'x':'down','y':'7'},{'x':'down','y':'3'},{'x':'down','y':'5'},{'x':'up','y':'1'},{'x':'down','y':'9'},{'x':'up','y':'4'},{'x':'forward','y':'1'},{'x':'up','y':'9'},{'x':'down','y':'2'},{'x':'forward','y':'8'},{'x':'down','y':'8'},{'x':'down','y':'6'},{'x':'forward','y':'7'},{'x':'down','y':'9'},{'x':'down','y':'3'},{'x':'forward','y':'8'},{'x':'forward','y':'3'},{'x':'down','y':'6'},{'x':'down','y':'7'},{'x':'down','y':'4'},{'x':'forward','y':'3'},{'x':'down','y':'3'},{'x':'down','y':'9'},{'x':'forward','y':'8'},{'x':'forward','y':'9'},{'x':'up','y':'5'},{'x':'forward','y':'1'},{'x':'down','y':'3'},{'x':'down','y':'3'},{'x':'down','y':'3'},{'x':'down','y':'9'},{'x':'down','y':'2'},{'x':'down','y':'9'},{'x':'forward','y':'5'},{'x':'up','y':'3'},{'x':'up','y':'5'},{'x':'up','y':'7'},{'x':'down','y':'2'},{'x':'down','y':'7'},{'x':'down','y':'9'},{'x':'down','y':'5'},{'x':'down','y':'4'},{'x':'down','y':'8'},{'x':'forward','y':'1'},{'x':'up','y':'8'},{'x':'up','y':'3'},{'x':'forward','y':'1'},{'x':'forward','y':'5'},{'x':'forward','y':'3'},{'x':'up','y':'7'},{'x':'down','y':'9'},{'x':'down','y':'9'},{'x':'forward','y':'7'},{'x':'down','y':'1'},{'x':'forward','y':'1'},{'x':'forward','y':'8'},{'x':'forward','y':'6'},{'x':'down','y':'1'},{'x':'down','y':'7'},{'x':'forward','y':'9'},{'x':'up','y':'4'},{'x':'forward','y':'8'},{'x':'up','y':'6'},{'x':'forward','y':'3'},{'x':'down','y':'3'},{'x':'down','y':'9'},{'x':'forward','y':'5'},{'x':'up','y':'3'},{'x':'down','y':'7'},{'x':'forward','y':'9'},{'x':'forward','y':'2'},{'x':'up','y':'1'},{'x':'forward','y':'7'},{'x':'up','y':'8'},{'x':'forward','y':'7'},{'x':'forward','y':'1'},{'x':'up','y':'3'},{'x':'up','y':'7'},{'x':'down','y':'1'},{'x':'forward','y':'5'},{'x':'up','y':'8'},{'x':'down','y':'2'},{'x':'up','y':'2'},{'x':'up','y':'3'},{'x':'down','y':'5'},{'x':'forward','y':'6'},{'x':'up','y':'8'},{'x':'down','y':'7'},{'x':'up','y':'8'},{'x':'up','y':'4'},{'x':'down','y':'8'},{'x':'forward','y':'9'},{'x':'down','y':'8'},{'x':'down','y':'2'},{'x':'up','y':'7'},{'x':'down','y':'5'},{'x':'forward','y':'1'},{'x':'up','y':'1'},{'x':'down','y':'1'},{'x':'forward','y':'1'},{'x':'forward','y':'1'},{'x':'forward','y':'3'},{'x':'forward','y':'8'},{'x':'down','y':'4'},{'x':'down','y':'5'},{'x':'forward','y':'9'},{'x':'up','y':'6'},{'x':'up','y':'7'},{'x':'down','y':'8'},{'x':'forward','y':'8'},{'x':'down','y':'2'},{'x':'forward','y':'6'},{'x':'down','y':'3'},{'x':'forward','y':'9'},{'x':'forward','y':'5'},{'x':'up','y':'7'},{'x':'down','y':'2'},{'x':'up','y':'6'},{'x':'up','y':'6'},{'x':'down','y':'9'},{'x':'forward','y':'3'},{'x':'up','y':'1'},{'x':'up','y':'2'},{'x':'forward','y':'9'},{'x':'down','y':'1'},{'x':'up','y':'3'},{'x':'forward','y':'4'},{'x':'forward','y':'9'},{'x':'down','y':'3'},{'x':'down','y':'4'},{'x':'forward','y':'4'},{'x':'up','y':'6'},{'x':'up','y':'5'},{'x':'forward','y':'2'},{'x':'down','y':'5'},{'x':'down','y':'1'},{'x':'forward','y':'9'},{'x':'down','y':'7'},{'x':'up','y':'6'},{'x':'up','y':'5'},{'x':'forward','y':'4'},{'x':'forward','y':'9'},{'x':'down','y':'6'},{'x':'forward','y':'1'},{'x':'up','y':'6'},{'x':'down','y':'1'},{'x':'forward','y':'4'},{'x':'up','y':'9'},{'x':'down','y':'6'},{'x':'forward','y':'5'},{'x':'down','y':'2'},{'x':'forward','y':'8'},{'x':'forward','y':'9'},{'x':'down','y':'7'},{'x':'down','y':'4'},{'x':'down','y':'1'},{'x':'forward','y':'1'},{'x':'down','y':'4'},{'x':'down','y':'6'},{'x':'forward','y':'5'},{'x':'forward','y':'2'},{'x':'forward','y':'8'},{'x':'forward','y':'5'},{'x':'down','y':'6'},{'x':'up','y':'9'},{'x':'forward','y':'2'},{'x':'down','y':'1'},{'x':'forward','y':'6'},{'x':'forward','y':'6'},{'x':'down','y':'5'},{'x':'forward','y':'5'},{'x':'down','y':'8'},{'x':'forward','y':'3'},{'x':'down','y':'5'},{'x':'up','y':'1'},{'x':'forward','y':'4'},{'x':'down','y':'5'},{'x':'down','y':'4'},{'x':'forward','y':'4'},{'x':'down','y':'3'},{'x':'down','y':'5'},{'x':'down','y':'7'},{'x':'forward','y':'5'},{'x':'forward','y':'2'},{'x':'up','y':'2'},{'x':'up','y':'4'},{'x':'forward','y':'7'},{'x':'down','y':'3'},{'x':'down','y':'1'},{'x':'down','y':'7'},{'x':'up','y':'8'},{'x':'forward','y':'6'},{'x':'forward','y':'3'},{'x':'forward','y':'7'},{'x':'forward','y':'5'},{'x':'up','y':'5'},{'x':'down','y':'3'},{'x':'down','y':'6'},{'x':'forward','y':'7'},{'x':'up','y':'9'},{'x':'up','y':'5'},{'x':'forward','y':'2'},{'x':'down','y':'9'},{'x':'forward','y':'8'},{'x':'forward','y':'6'},{'x':'forward','y':'5'},{'x':'up','y':'5'},{'x':'down','y':'9'},{'x':'down','y':'8'},{'x':'up','y':'2'},{'x':'up','y':'4'},{'x':'forward','y':'5'},{'x':'forward','y':'2'},{'x':'up','y':'4'},{'x':'forward','y':'3'},{'x':'down','y':'7'},{'x':'forward','y':'8'},{'x':'forward','y':'1'},{'x':'forward','y':'9'},{'x':'forward','y':'6'},{'x':'up','y':'7'},{'x':'up','y':'2'},{'x':'forward','y':'1'},{'x':'down','y':'5'},{'x':'forward','y':'9'},{'x':'down','y':'8'},{'x':'down','y':'4'},{'x':'down','y':'7'},{'x':'up','y':'2'},{'x':'down','y':'5'},{'x':'forward','y':'7'},{'x':'up','y':'3'},{'x':'forward','y':'6'},{'x':'down','y':'2'},{'x':'forward','y':'8'},{'x':'forward','y':'8'},{'x':'up','y':'3'},{'x':'forward','y':'6'},{'x':'forward','y':'9'},{'x':'forward','y':'8'},{'x':'forward','y':'3'},{'x':'up','y':'9'},{'x':'forward','y':'9'},{'x':'down','y':'6'},{'x':'forward','y':'5'},{'x':'forward','y':'8'},{'x':'up','y':'1'},{'x':'forward','y':'2'},{'x':'forward','y':'6'},{'x':'forward','y':'8'},{'x':'up','y':'6'},{'x':'down','y':'3'},{'x':'down','y':'9'},{'x':'down','y':'6'},{'x':'up','y':'7'},{'x':'forward','y':'6'},{'x':'forward','y':'1'},{'x':'forward','y':'1'},{'x':'forward','y':'7'},{'x':'down','y':'5'},{'x':'down','y':'9'},{'x':'down','y':'3'},{'x':'up','y':'3'},{'x':'forward','y':'3'},{'x':'forward','y':'2'},{'x':'down','y':'5'},{'x':'up','y':'4'},{'x':'forward','y':'1'},{'x':'down','y':'9'},{'x':'forward','y':'9'},{'x':'forward','y':'1'},{'x':'forward','y':'1'},{'x':'down','y':'9'},{'x':'down','y':'2'},{'x':'forward','y':'4'},{'x':'forward','y':'9'},{'x':'down','y':'5'},{'x':'up','y':'5'},{'x':'down','y':'6'},{'x':'forward','y':'8'},{'x':'down','y':'4'},{'x':'down','y':'1'},{'x':'up','y':'5'},{'x':'up','y':'3'},{'x':'down','y':'2'},{'x':'down','y':'3'},{'x':'forward','y':'8'},{'x':'forward','y':'5'},{'x':'forward','y':'9'},{'x':'down','y':'4'},{'x':'up','y':'9'},{'x':'down','y':'1'},{'x':'forward','y':'2'},{'x':'down','y':'8'},{'x':'up','y':'2'},{'x':'down','y':'8'},{'x':'up','y':'6'},{'x':'forward','y':'7'},{'x':'down','y':'1'},{'x':'up','y':'7'},{'x':'down','y':'9'},{'x':'forward','y':'9'},{'x':'down','y':'9'},{'x':'forward','y':'7'},{'x':'forward','y':'4'},{'x':'down','y':'5'},{'x':'up','y':'3'},{'x':'down','y':'3'},{'x':'forward','y':'8'},{'x':'down','y':'3'},{'x':'down','y':'4'},{'x':'down','y':'9'},{'x':'forward','y':'4'},{'x':'up','y':'4'},{'x':'forward','y':'6'},{'x':'down','y':'1'},{'x':'forward','y':'5'},{'x':'down','y':'2'},{'x':'forward','y':'6'},{'x':'down','y':'4'},{'x':'down','y':'1'},{'x':'forward','y':'3'},{'x':'up','y':'3'},{'x':'up','y':'3'},{'x':'forward','y':'8'},{'x':'forward','y':'6'},{'x':'forward','y':'6'},{'x':'down','y':'9'},{'x':'forward','y':'5'},{'x':'down','y':'9'},{'x':'forward','y':'6'},{'x':'forward','y':'3'},{'x':'up','y':'4'},{'x':'forward','y':'6'},{'x':'down','y':'8'},{'x':'up','y':'3'},{'x':'down','y':'9'},{'x':'down','y':'3'},{'x':'forward','y':'6'},{'x':'down','y':'4'},{'x':'down','y':'8'},{'x':'down','y':'6'},{'x':'down','y':'5'},{'x':'forward','y':'1'},{'x':'down','y':'3'},{'x':'forward','y':'9'},{'x':'down','y':'9'},{'x':'down','y':'3'},{'x':'forward','y':'9'},{'x':'down','y':'2'},{'x':'forward','y':'3'},{'x':'up','y':'6'},{'x':'forward','y':'2'},{'x':'forward','y':'1'},{'x':'forward','y':'8'},{'x':'down','y':'2'},{'x':'down','y':'2'},{'x':'down','y':'7'},{'x':'up','y':'7'},{'x':'forward','y':'3'},{'x':'up','y':'2'},{'x':'up','y':'6'},{'x':'up','y':'6'},{'x':'down','y':'2'},{'x':'forward','y':'2'},{'x':'forward','y':'2'},{'x':'down','y':'6'},{'x':'down','y':'2'},{'x':'up','y':'6'},{'x':'forward','y':'4'},{'x':'down','y':'9'},{'x':'up','y':'3'},{'x':'down','y':'4'},{'x':'forward','y':'7'},{'x':'up','y':'6'},{'x':'forward','y':'3'},{'x':'forward','y':'1'},{'x':'down','y':'1'},{'x':'down','y':'8'},{'x':'down','y':'8'},{'x':'down','y':'1'},{'x':'forward','y':'2'},{'x':'down','y':'6'},{'x':'down','y':'6'},{'x':'forward','y':'2'},{'x':'up','y':'6'},{'x':'down','y':'2'},{'x':'up','y':'4'},{'x':'down','y':'1'},{'x':'up','y':'8'},{'x':'up','y':'5'},{'x':'down','y':'4'},{'x':'forward','y':'2'},{'x':'forward','y':'2'},{'x':'down','y':'2'},{'x':'forward','y':'9'},{'x':'down','y':'5'},{'x':'down','y':'9'},{'x':'forward','y':'6'},{'x':'down','y':'9'},{'x':'down','y':'5'},{'x':'down','y':'7'},{'x':'down','y':'3'},{'x':'up','y':'9'},{'x':'down','y':'6'},{'x':'up','y':'6'},{'x':'up','y':'8'},{'x':'forward','y':'8'},{'x':'forward','y':'8'},{'x':'down','y':'3'},{'x':'up','y':'9'},{'x':'forward','y':'9'},{'x':'forward','y':'8'},{'x':'forward','y':'6'},{'x':'down','y':'4'},{'x':'down','y':'6'},{'x':'up','y':'9'},{'x':'down','y':'9'},{'x':'down','y':'5'},{'x':'up','y':'2'},{'x':'up','y':'2'},{'x':'forward','y':'2'},{'x':'forward','y':'1'},{'x':'down','y':'5'},{'x':'down','y':'8'},{'x':'up','y':'3'},{'x':'forward','y':'2'},{'x':'down','y':'1'},{'x':'down','y':'9'},{'x':'forward','y':'7'},{'x':'forward','y':'5'},{'x':'up','y':'3'},{'x':'up','y':'6'},{'x':'down','y':'5'},{'x':'up','y':'1'},{'x':'down','y':'2'},{'x':'up','y':'7'},{'x':'forward','y':'1'},{'x':'down','y':'6'},{'x':'up','y':'6'},{'x':'up','y':'1'},{'x':'up','y':'2'},{'x':'forward','y':'2'},{'x':'down','y':'4'},{'x':'up','y':'1'},{'x':'up','y':'3'},{'x':'up','y':'9'},{'x':'up','y':'7'},{'x':'forward','y':'4'},{'x':'down','y':'5'},{'x':'down','y':'9'},{'x':'down','y':'8'},{'x':'forward','y':'1'},{'x':'down','y':'4'},{'x':'forward','y':'4'},{'x':'forward','y':'8'},{'x':'up','y':'4'},{'x':'down','y':'8'},{'x':'down','y':'1'},{'x':'down','y':'9'},{'x':'down','y':'5'},{'x':'forward','y':'3'},{'x':'forward','y':'8'},{'x':'up','y':'2'},{'x':'down','y':'6'},{'x':'up','y':'6'},{'x':'forward','y':'5'},{'x':'down','y':'6'},{'x':'down','y':'8'},{'x':'forward','y':'6'},{'x':'down','y':'6'},{'x':'up','y':'5'},{'x':'down','y':'2'},{'x':'up','y':'5'},{'x':'down','y':'7'},{'x':'down','y':'9'},{'x':'forward','y':'3'},{'x':'down','y':'8'},{'x':'forward','y':'1'},{'x':'forward','y':'5'},{'x':'forward','y':'2'},{'x':'down','y':'4'},{'x':'forward','y':'2'},{'x':'forward','y':'7'},{'x':'up','y':'7'},{'x':'up','y':'3'},{'x':'down','y':'2'},{'x':'forward','y':'7'},{'x':'up','y':'6'},{'x':'forward','y':'6'},{'x':'forward','y':'1'},{'x':'down','y':'4'},{'x':'down','y':'2'},{'x':'down','y':'6'},{'x':'down','y':'1'},{'x':'forward','y':'1'},{'x':'forward','y':'8'},{'x':'down','y':'1'},{'x':'up','y':'2'},{'x':'down','y':'2'},{'x':'down','y':'1'},{'x':'down','y':'6'},{'x':'forward','y':'7'},{'x':'forward','y':'6'},{'x':'forward','y':'5'},{'x':'down','y':'1'},{'x':'down','y':'8'},{'x':'down','y':'1'},{'x':'up','y':'5'},{'x':'forward','y':'6'},{'x':'forward','y':'5'},{'x':'up','y':'5'},{'x':'forward','y':'5'},{'x':'up','y':'8'},{'x':'down','y':'3'},{'x':'forward','y':'1'},{'x':'forward','y':'6'},{'x':'up','y':'8'},{'x':'up','y':'9'},{'x':'down','y':'7'},{'x':'down','y':'1'},{'x':'forward','y':'2'},{'x':'forward','y':'1'},{'x':'forward','y':'9'},{'x':'forward','y':'3'},{'x':'forward','y':'7'},{'x':'forward','y':'8'},{'x':'down','y':'6'},{'x':'up','y':'5'},{'x':'down','y':'1'},{'x':'forward','y':'1'},{'x':'forward','y':'8'},{'x':'down','y':'6'},{'x':'forward','y':'7'},{'x':'forward','y':'8'},{'x':'down','y':'7'},{'x':'down','y':'5'},{'x':'down','y':'7'},{'x':'up','y':'7'},{'x':'down','y':'5'},{'x':'forward','y':'5'},{'x':'down','y':'4'},{'x':'down','y':'7'},{'x':'forward','y':'6'},{'x':'forward','y':'5'},{'x':'forward','y':'6'},{'x':'forward','y':'7'},{'x':'up','y':'9'},{'x':'down','y':'2'},{'x':'down','y':'2'},{'x':'down','y':'4'},{'x':'down','y':'8'},{'x':'up','y':'3'},{'x':'down','y':'7'},{'x':'down','y':'5'},{'x':'forward','y':'6'},{'x':'down','y':'9'},{'x':'down','y':'5'},{'x':'down','y':'9'},{'x':'down','y':'1'},{'x':'forward','y':'6'},{'x':'up','y':'7'},{'x':'down','y':'2'},{'x':'down','y':'2'},{'x':'forward','y':'8'},{'x':'forward','y':'1'},{'x':'down','y':'3'},{'x':'down','y':'4'},{'x':'forward','y':'3'},{'x':'forward','y':'4'},{'x':'down','y':'1'},{'x':'forward','y':'9'},{'x':'up','y':'7'},{'x':'forward','y':'8'},{'x':'down','y':'9'},{'x':'forward','y':'7'},{'x':'forward','y':'6'},{'x':'forward','y':'2'},{'x':'down','y':'8'},{'x':'up','y':'9'},{'x':'down','y':'2'},{'x':'forward','y':'8'},{'x':'up','y':'7'},{'x':'down','y':'5'},{'x':'down','y':'9'},{'x':'down','y':'3'},{'x':'down','y':'6'},{'x':'down','y':'4'},{'x':'up','y':'2'},{'x':'down','y':'3'},{'x':'down','y':'1'},{'x':'up','y':'1'},{'x':'up','y':'6'},{'x':'forward','y':'4'},{'x':'down','y':'1'},{'x':'forward','y':'1'},{'x':'up','y':'4'},{'x':'forward','y':'4'},{'x':'forward','y':'3'},{'x':'forward','y':'8'},{'x':'forward','y':'9'},{'x':'forward','y':'9'},{'x':'down','y':'2'},{'x':'down','y':'5'},{'x':'up','y':'8'},{'x':'up','y':'1'},{'x':'down','y':'9'},{'x':'forward','y':'5'},{'x':'down','y':'1'},{'x':'up','y':'5'},{'x':'down','y':'4'},{'x':'up','y':'3'},{'x':'forward','y':'9'},{'x':'up','y':'7'},{'x':'forward','y':'9'},{'x':'up','y':'1'},{'x':'forward','y':'4'},{'x':'forward','y':'8'},{'x':'up','y':'6'},{'x':'down','y':'6'},{'x':'down','y':'8'},{'x':'down','y':'8'},{'x':'down','y':'9'},{'x':'down','y':'2'},{'x':'up','y':'7'},{'x':'forward','y':'9'},{'x':'up','y':'8'},{'x':'down','y':'9'},{'x':'up','y':'6'},{'x':'forward','y':'4'},{'x':'up','y':'7'},{'x':'down','y':'6'},{'x':'up','y':'7'},{'x':'down','y':'4'},{'x':'forward','y':'2'},{'x':'forward','y':'9'},{'x':'down','y':'6'},{'x':'down','y':'8'},{'x':'forward','y':'6'},{'x':'forward','y':'3'},{'x':'down','y':'3'},{'x':'forward','y':'3'},{'x':'forward','y':'7'},{'x':'up','y':'2'},{'x':'down','y':'8'},{'x':'forward','y':'7'},{'x':'down','y':'5'},{'x':'down','y':'1'},{'x':'down','y':'6'},{'x':'down','y':'5'},{'x':'down','y':'2'},{'x':'up','y':'6'},{'x':'forward','y':'7'},{'x':'forward','y':'6'},{'x':'down','y':'1'},{'x':'down','y':'5'},{'x':'forward','y':'7'},{'x':'forward','y':'3'},{'x':'down','y':'9'},{'x':'down','y':'8'},{'x':'forward','y':'5'},{'x':'up','y':'7'},{'x':'forward','y':'1'},{'x':'up','y':'5'},{'x':'down','y':'7'},{'x':'forward','y':'8'},{'x':'forward','y':'6'},{'x':'forward','y':'2'},{'x':'down','y':'1'},{'x':'down','y':'9'},{'x':'up','y':'1'},{'x':'down','y':'2'},{'x':'down','y':'2'},{'x':'down','y':'7'},{'x':'down','y':'4'},{'x':'forward','y':'1'},{'x':'down','y':'3'},{'x':'down','y':'5'},{'x':'up','y':'8'},{'x':'forward','y':'7'},{'x':'up','y':'5'},{'x':'down','y':'8'},{'x':'down','y':'6'},{'x':'down','y':'3'},{'x':'down','y':'3'},{'x':'down','y':'9'},{'x':'down','y':'7'},{'x':'forward','y':'4'},{'x':'up','y':'5'},{'x':'forward','y':'3'},{'x':'forward','y':'7'},{'x':'down','y':'3'},{'x':'up','y':'6'},{'x':'forward','y':'4'},{'x':'forward','y':'4'},{'x':'down','y':'4'},{'x':'down','y':'2'},{'x':'up','y':'1'},{'x':'forward','y':'8'},{'x':'forward','y':'3'},{'x':'up','y':'1'},{'x':'forward','y':'1'},{'x':'down','y':'9'},{'x':'down','y':'6'},{'x':'up','y':'1'},{'x':'down','y':'4'},{'x':'down','y':'8'},{'x':'up','y':'9'},{'x':'forward','y':'2'},{'x':'down','y':'3'},{'x':'forward','y':'8'},{'x':'down','y':'6'},{'x':'down','y':'5'},{'x':'down','y':'4'},{'x':'up','y':'5'},{'x':'down','y':'9'},{'x':'up','y':'3'},{'x':'forward','y':'4'},{'x':'down','y':'9'},{'x':'down','y':'7'},{'x':'forward','y':'6'},{'x':'forward','y':'6'},{'x':'forward','y':'8'},{'x':'forward','y':'6'},{'x':'down','y':'9'},{'x':'down','y':'1'},{'x':'forward','y':'3'},{'x':'forward','y':'9'},{'x':'forward','y':'4'},{'x':'up','y':'8'},{'x':'up','y':'5'},{'x':'up','y':'2'},{'x':'down','y':'9'},{'x':'forward','y':'9'},{'x':'forward','y':'3'},{'x':'forward','y':'5'},{'x':'up','y':'8'},{'x':'down','y':'2'},{'x':'down','y':'1'},{'x':'forward','y':'9'},{'x':'forward','y':'7'},{'x':'down','y':'7'},{'x':'forward','y':'1'},{'x':'down','y':'5'},{'x':'down','y':'8'},{'x':'down','y':'4'},{'x':'down','y':'7'},{'x':'down','y':'1'},{'x':'down','y':'4'},{'x':'down','y':'7'},{'x':'forward','y':'2'},{'x':'down','y':'5'},{'x':'forward','y':'1'},{'x':'down','y':'4'},{'x':'down','y':'5'},{'x':'down','y':'2'},{'x':'up','y':'5'},{'x':'forward','y':'9'},{'x':'down','y':'5'},{'x':'forward','y':'1'},{'x':'down','y':'7'},{'x':'down','y':'4'},{'x':'down','y':'7'},{'x':'down','y':'6'},{'x':'forward','y':'5'},{'x':'down','y':'3'},{'x':'down','y':'1'},{'x':'up','y':'2'},{'x':'forward','y':'2'},{'x':'forward','y':'2'},{'x':'forward','y':'1'},{'x':'down','y':'1'},{'x':'forward','y':'3'},{'x':'forward','y':'5'},{'x':'forward','y':'4'},{'x':'down','y':'7'},{'x':'forward','y':'7'},{'x':'down','y':'1'},{'x':'forward','y':'7'},{'x':'forward','y':'5'},{'x':'down','y':'8'},{'x':'forward','y':'6'},{'x':'forward','y':'6'},{'x':'forward','y':'6'},{'x':'forward','y':'7'},{'x':'up','y':'9'},{'x':'down','y':'4'},{'x':'down','y':'1'},{'x':'down','y':'8'},{'x':'forward','y':'7'},{'x':'up','y':'4'},{'x':'forward','y':'4'},{'x':'down','y':'6'},{'x':'up','y':'1'},{'x':'forward','y':'5'},{'x':'forward','y':'2'},{'x':'down','y':'1'},{'x':'forward','y':'7'},{'x':'forward','y':'6'},{'x':'forward','y':'5'},{'x':'forward','y':'2'},{'x':'down','y':'5'},{'x':'down','y':'6'},{'x':'down','y':'9'},{'x':'up','y':'4'},{'x':'forward','y':'6'},{'x':'forward','y':'2'},{'x':'down','y':'5'},{'x':'down','y':'3'},{'x':'up','y':'4'},{'x':'down','y':'6'},{'x':'up','y':'8'},{'x':'forward','y':'8'},{'x':'up','y':'9'},{'x':'forward','y':'6'},{'x':'forward','y':'6'},{'x':'up','y':'5'},{'x':'down','y':'7'},{'x':'forward','y':'9'},{'x':'forward','y':'6'},{'x':'down','y':'9'},{'x':'down','y':'9'},{'x':'up','y':'1'},{'x':'forward','y':'7'},{'x':'down','y':'6'},{'x':'up','y':'4'},{'x':'down','y':'8'},{'x':'down','y':'3'},{'x':'forward','y':'9'},{'x':'forward','y':'5'},{'x':'forward','y':'9'},{'x':'down','y':'2'},{'x':'forward','y':'3'},{'x':'down','y':'1'},{'x':'forward','y':'9'},{'x':'up','y':'4'},{'x':'up','y':'8'},{'x':'forward','y':'6'},{'x':'down','y':'1'},{'x':'forward','y':'9'},{'x':'forward','y':'4'},{'x':'down','y':'5'},{'x':'forward','y':'2'},{'x':'up','y':'3'},{'x':'forward','y':'5'},{'x':'up','y':'8'},{'x':'up','y':'7'},{'x':'down','y':'8'},{'x':'forward','y':'4'},{'x':'down','y':'6'},{'x':'forward','y':'7'},{'x':'up','y':'2'},{'x':'down','y':'2'},{'x':'forward','y':'4'},{'x':'down','y':'9'},{'x':'down','y':'8'},{'x':'forward','y':'2'},{'x':'forward','y':'2'},{'x':'down','y':'2'},{'x':'down','y':'3'},{'x':'forward','y':'3'},{'x':'down','y':'1'},{'x':'forward','y':'8'},{'x':'down','y':'7'},{'x':'up','y':'9'},{'x':'down','y':'4'},{'x':'down','y':'2'},{'x':'down','y':'5'},{'x':'up','y':'7'},{'x':'down','y':'8'},{'x':'down','y':'2'},{'x':'down','y':'4'},{'x':'down','y':'4'},{'x':'down','y':'8'},{'x':'forward','y':'7'},{'x':'forward','y':'7'},{'x':'down','y':'8'},{'x':'up','y':'2'},{'x':'up','y':'3'},{'x':'forward','y':'8'},{'x':'up','y':'1'},{'x':'down','y':'7'},{'x':'forward','y':'7'},{'x':'down','y':'6'},{'x':'down','y':'8'},{'x':'up','y':'6'},{'x':'forward','y':'5'},{'x':'forward','y':'3'},{'x':'down','y':'6'},{'x':'forward','y':'9'},{'x':'up','y':'4'},{'x':'up','y':'7'},{'x':'forward','y':'4'},{'x':'down','y':'1'},{'x':'down','y':'8'},{'x':'down','y':'1'},{'x':'forward','y':'9'},{'x':'down','y':'3'},{'x':'forward','y':'8'},{'x':'forward','y':'6'},{'x':'forward','y':'4'},{'x':'down','y':'9'},{'x':'forward','y':'3'},{'x':'up','y':'5'},{'x':'up','y':'8'},{'x':'down','y':'9'},{'x':'down','y':'5'},{'x':'down','y':'1'},{'x':'up','y':'8'},{'x':'forward','y':'8'},{'x':'up','y':'6'},{'x':'forward','y':'2'},{'x':'down','y':'8'},{'x':'up','y':'4'},{'x':'up','y':'7'},{'x':'forward','y':'7'},{'x':'forward','y':'5'},{'x':'forward','y':'9'},{'x':'forward','y':'2'},{'x':'up','y':'4'},{'x':'down','y':'9'},{'x':'forward','y':'7'},{'x':'down','y':'6'},{'x':'down','y':'6'},{'x':'forward','y':'7'},{'x':'down','y':'5'},{'x':'up','y':'6'},{'x':'down','y':'9'},{'x':'forward','y':'3'}];
var horizontal = 0;
var depth = 0;
var aim = 0;
for (var i in directions){
    if (directions[i].x == 'down') {
        //depth += parseInt(directions[i].y);
        aim += parseInt(directions[i].y);
    } else if (directions[i].x == 'up') {
        //depth -= parseInt(directions[i].y);
        aim -= parseInt(directions[i].y);
    } else {
        horizontal += parseInt(directions[i].y);
        depth += aim * parseInt(directions[i].y);
    }
    //console.log('horizontal: ' + horizontal + '. depth: ' + depth + '. total: ' + (horizontal * depth));
}
console.log('horizontal: ' + horizontal + '. depth: ' + depth + '. total: ' + (horizontal * depth));

//1944107992
//1942068080
