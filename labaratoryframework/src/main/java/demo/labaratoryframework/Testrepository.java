package demo.labaratoryframework.repository;

import demo.labaratoryframework.model.Test;
import org.springframework.data.jpa.repository.JpaRepository;
import org.junit.jupiter.api.Test;
import org.springframework.stereotype.Repository;

@Repository
public interface TestRepository extends JpaRepository<Test, Long> {
}
