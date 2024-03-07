import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    // Simulated user data
    private final UserData userData = new UserData("john_doe", "John Doe");

    @GetMapping("/api/user-data")
    public UserData getUserData() {
        return userData;
    }

    // Sample data class representing user information
    private static class UserData {
        private String username;
        private String fullName;

        public UserData(String username, String fullName) {
            this.username = username;
            this.fullName = fullName;
        }

        // Getters and setters (omitted for brevity)
    }
}
