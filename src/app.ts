import os from "os";

/**
 * Application class is the entry point of the application.
 * It's used to demonstrate the good working of the starter kit.
 */
class Application {
  static print() {
    console.log("Hello World from TypeScript starter kit!");
    console.log(`Node version: ${process.version}.`);
    console.log(`Running on ${os.platform()}.`);
    console.log(`Number of CPUs on this machine: ${os.cpus().length}.`);
  }
}

Application.print();
