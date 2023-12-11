import os from "os";

/**
 * Application class is the entry point of the application.
 * It's used to demonstrate the good working of the starter kit.
 */
class Application {
  static print() {
    console.log("Hello World from TypeScript starter kit!\n");

    console.log(`Node version: ${process.version}. Running on ${os.type()} ${os.arch()} with hostname ${os.hostname()}.`);
    console.log(
      `Number of CPUs on this machine: ${os.cpus().length} ; total memory ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(
        2
      )}GB and free memory ${(os.freemem() / 1024 / 1024 / 100).toFixed(2)}GB.`
    );
  }
}

Application.print();
