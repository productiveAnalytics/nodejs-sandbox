const child_proc = require('child_process');

// destructure "spawn" function. Same as: const spawn = child_proc.spawn;
const { spawn } = child_proc; 

// console.log(spawn);

// print current dir using pwd
// setImmediate(() => {
    const pwd_proc = spawn('pwd');
    pwd_proc.stdout.pipe(process.stdout);
    console.log(`[INFO]Confirm that currDir is same as ${__dirname}`);
// });

// print content of this JS file
// setImmediate(() => {
    console.log(`[INFO]Contents of file ${__filename} are:`)
    const file_content_reader_proc = spawn('cat', [__filename])
    file_content_reader_proc.stdout.pipe(process.stdout);
// });

// print current dir content using native command
// setImmediate(() => {
    console.log(`[INFO]Option #1 : Content of ${__dirname} are: `)
    const native_ls_proc = spawn('dir', ['.' , '-a']); // dir . -a
    native_ls_proc.stdout.pipe(process.stdout);
// });

// print current dir content using Shell
// setImmediate(() => {
    console.log(`[INFO]Option #2 : Content of ${__dirname} are: `)
    const shell_ls_proc = spawn('ls . -a', {shell: true}); // ls . -a
    shell_ls_proc.stdout.pipe(process.stdout);
// });
