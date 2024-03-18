import OperatingSystem from "@/utils/os.utils";

/**
 * Application class is the entry point of the application.
 * It's used to demonstrate the good working of the starter kit.
 */
class Application {
  static start() {
    OperatingSystem.print();
  }
}

Application.start();
