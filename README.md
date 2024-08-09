# Angular Demo: Understanding Change Detection and Dependency Injection

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/ankita-nagesh/dependency-injection-and-change-detection)

## Change Detection
Change detection is Angular's mechanism for updating the view when data changes. It's a core concept that ensures the UI stays in sync with the application's data.

### Default Change Detection
By default, Angular checks for changes after every event or lifecycle hook. This ensures that the UI is always up-to-date but can impact performance in complex applications.

### OnPush Change Detection
This strategy improves performance by checking for changes only when input properties change or events are emitted. It's ideal for components with infrequent data changes.

## Dependency Injection (DI)
Dependency injection is a design pattern where dependencies are provided to a component or service instead of creating them within the component itself. Angular heavily relies on DI for managing and creating dependencies.

### Hierarchical Dependency Injection
Angular's DI system operates in a hierarchical manner. Components and services can have their own injectors, forming a tree-like structure. This allows for granular control over dependency resolution and provides a way to manage dependencies at different levels of the application.

### Benefits
### Improved Modularity:

- *Encapsulation:* Services can be scoped to specific components or modules, reducing global dependencies.
- *Reusability:* Services can be shared within a component tree, promoting code reuse.
### Enhanced Testability:
- *Isolation:* Components can be tested independently by providing mock dependencies.
Dependency Overriding: Dependencies can be replaced for different testing scenarios.
Optimized Performance:
- *Lazy Loading:* Components and their dependencies can be loaded on demand, improving initial load times.
Tree Shaking: Unused code can be eliminated, resulting in smaller bundle sizes.

### Use Cases
- *Feature-Specific Services:* Create services dedicated to specific features or components.
- *Data Management:* Manage data within specific parts of the application, preventing conflicts.
- *Testing and Mocking:* Isolate components for testing by providing mock dependencies.
- *Lazy Loading:* Improve performance by loading components and their dependencies on demand.
- *Dependency Customization:* Provide different implementations of services based on conditions.

# This Demo
This Angular project demonstrates these concepts through practical examples. You can explore how change detection works with both default and OnPush strategies. Additionally, you'll see how to inject dependencies into components and understand the hierarchical nature of Angular's DI system.

## Usage
- Clone the repository.
- Install dependencies: npm install
- Run the development server: ng serve
