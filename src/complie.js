import {compile} from "nexe";
compile({
    input: './dist/main.js',
    target: 'windows-x64-8.4.0',
    nodeVersion: "latest",
    flags:['--experimental-modules'],
    // target: 'macos-8.4.0',
    output: './dist/client.exe'
}).then(() => {console.log('success')})