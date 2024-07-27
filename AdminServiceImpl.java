package com.englishacademy.EnglishAcademy.services.impl;

import com.englishacademy.EnglishAcademy.dtos.admin.Menu;
import com.englishacademy.EnglishAcademy.dtos.admin.MenuItem;
import com.englishacademy.EnglishAcademy.dtos.course_online.CourseOnlineRevenueDTO;
import com.englishacademy.EnglishAcademy.dtos.course_online_student.CourseOnlineMonthlyRevenueDTO;
import com.englishacademy.EnglishAcademy.dtos.tutor.TutorRevenueDTO;
import com.englishacademy.EnglishAcademy.entities.CourseOnline;
import com.englishacademy.EnglishAcademy.entities.Role;
import com.englishacademy.EnglishAcademy.entities.User;
import com.englishacademy.EnglishAcademy.repositories.*;
import com.englishacademy.EnglishAcademy.services.AdminService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.*;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class AdminServiceImpl implements AdminService {
    private final CourseOnlineStudentRepository courseOnlineStudentRepository;
    private final PaymentRepository paymentRepository;
    private final ClassesRepository classesRepository;
    private final UserRepository userRepository;
    private final CourseOnlineRepository courseOnlineRepository;
    private final CourseOfflineRepository courseOfflineRepository;

    @Override
    public List<Menu> getMenu(User currenUser) {
        List<Menu> menus = new ArrayList<>();
        Set<Role> roles = convertAuthoritiesToRoles(currenUser.getAuthorities());
        if (roles.contains(Role.ADMIN)) {
            List<MenuItem> menuItems1 = new ArrayList<>();
            List<MenuItem> menuItems2 = new ArrayList<>();
            List<MenuItem> menuItems3 = new ArrayList<>();
            List<MenuItem> menuItems4 = new ArrayList<>();
            List<MenuItem> menuItems5 = new ArrayList<>();
            List<MenuItem> menuItems6 = new ArrayList<>();
            menuItems1.add(new MenuItem("Dashboard", "/", "far fa-chart-bar"));
            menuItems2.add(new MenuItem("Course Online", "/course-online", "fas fa-book-reader"));
            menuItems2.add(new MenuItem("Course Offline", "/course-offline", "fas fa-book-reader"));
            menuItems2.add(new MenuItem("Categories", "/category-list", "fas fa-stream"));
            menuItems3.add(new MenuItem("All Classes", "/classes", "fas fa-school"));
            menuItems3.add(new MenuItem("Class Room", "/class-room", "fas fa-door-closed"));
            menuItems4.add(new MenuItem("Booking", "/booking", "fas fa-calendar-alt"));
            menuItems4.add(new MenuItem("Room Online", "/room", "fas fa-door-open"));
            menuItems4.add(new MenuItem("Tutor Registration", "/tutor/registration", "fas fa-user-edit"));
            menuItems5.add(new MenuItem("Entrance Test", "/entrance-test", "fas fa-window-restore"));
            menuItems6.add(new MenuItem("Profile", "/profile", "fas fa-user-shield"));
            menus.add(new Menu("Dashboard", menuItems1));
            menus.add(new Menu("Course & Lesson", menuItems2));
            menus.add(new Menu("Classes & Room", menuItems3));
            menus.add(new Menu("Teacher & Tutor", menuItems4));
            menus.add(new Menu("Entrance Test", menuItems5));
            menus.add(new Menu("Information", menuItems6));
        } else if (roles.contains(Role.TEACHER)) {
            List<MenuItem> menuItems1 = new ArrayList<>();
            List<MenuItem> menuItems2 = new ArrayList<>();
            List<MenuItem> menuItems4 = new ArrayList<>();
            List<MenuItem> menuItems5 = new ArrayList<>();
            menuItems1.add(new MenuItem("Dashboard", "/dashboard-teacher", "far fa-chart-bar"));
            menuItems2.add(new MenuItem("Teaching Class", "/teacher/class", "fas fa-door-open"));
            menuItems4.add(new MenuItem("Room", "/room", "fas fa-door-open"));
            menuItems4.add(new MenuItem("Booking Waiting", "/booking-waiting", "fas fa-calendar-alt"));
            menuItems4.add(new MenuItem("Tutoring Schedule", "/tutoring-schedule", "fas fa-chalkboard-teacher"));
            menuItems4.add(new MenuItem("Tutor Registration", "/tutor/registration", "fas fa-user-edit"));
            menuItems5.add(new MenuItem("Profile", "/profile", "fas fa-user-shield"));
            menus.add(new Menu("Dashboard", menuItems1));
            menus.add(new Menu("Teacher & Tutor", menuItems4));
            menus.add(new Menu("Teaching Class", menuItems2));
            menus.add(new Menu("Information", menuItems5));
        } else if (roles.contains(Role.TRAINERS)) {
            List<MenuItem> menuItems1 = new ArrayList<>();
            List<MenuItem> menuItems5 = new ArrayList<>();
            menuItems1.add(new MenuItem("Dashboard", "/dashboard", "far fa-chart-bar"));
            menuItems5.add(new MenuItem("Profile", "/profile", "fas fa-user-shield"));
            menus.add(new Menu("Dashboard", menuItems1));
            menus.add(new Menu("Information", menuItems5));
        } else if (roles.contains(Role.ADMISSIONS)) {
            List<MenuItem> menuItems1 = new ArrayList<>();
            List<MenuItem> menuItems2 = new ArrayList<>();
            List<MenuItem> menuItems3 = new ArrayList<>();
            menuItems1.add(new MenuItem("Dashboard", "/dashboard-admissions", "far fa-chart-bar"));
            menuItems2.add(new MenuItem("Customers", "/potential-customers", "fas fa-users"));
            menuItems3.add(new MenuItem("Profile", "/profile", "fas fa-user-shield"));
            menus.add(new Menu("Dashboard", menuItems1));
            menus.add(new Menu("Potential Customers", menuItems2));
            menus.add(new Menu("Information", menuItems3));
        }
        return menus;
    }

    @Override
    public List<CourseOnlineMonthlyRevenueDTO> getCourseOnlineMonthlyRevenueLast12Months(User currenUser) {
        LocalDate now = LocalDate.now();
        LocalDate startDate = now.minusMonths(12).withDayOfMonth(1);
        Timestamp startTimestamp = Timestamp.valueOf(startDate.atStartOfDay());

        List<CourseOnlineMonthlyRevenueDTO> revenueData = courseOnlineStudentRepository
                .getMonthlyRevenueLast12Months(startTimestamp);
        Map<YearMonth, Double> revenueMap = new HashMap<>();

        // Chuyển đổi dữ liệu từ cơ sở dữ liệu thành Map để dễ dàng xử lý
        for (CourseOnlineMonthlyRevenueDTO dto : revenueData) {
            YearMonth yearMonth = YearMonth.of(dto.getYear(), dto.getMonth());
            revenueMap.put(yearMonth, dto.getTotalRevenue());
        }

        List<CourseOnlineMonthlyRevenueDTO> result = new ArrayList<>();
        // Tạo dữ liệu cho 12 tháng gần nhất
        for (int i = 0; i < 12; i++) {
            YearMonth yearMonth = YearMonth.now().minusMonths(i);
            Double totalRevenue = revenueMap.getOrDefault(yearMonth, 0.0);
            result.add(new CourseOnlineMonthlyRevenueDTO(yearMonth.getYear(), yearMonth.getMonthValue(), totalRevenue));
        }

        return result;
    }

    @Override
    public double getCountCourseOnRevenue(User currenUser) {
        return courseOnlineStudentRepository.getTotalRevenue();
    }

    @Override
    public double getCountCourseOfRevenue(User currenUser) {
        return 0;
    }

    @Override
    public double getCountTutorRevenue(User currenUser) {
        return paymentRepository.getTotalRevenue();
    }

    @Override
    public List<CourseOnlineMonthlyRevenueDTO> getTutorMonthlyRevenueLast12Months(User currenUser) {
        LocalDate now = LocalDate.now();
        LocalDate startDate = now.minusMonths(12).withDayOfMonth(1);
        Timestamp startTimestamp = Timestamp.valueOf(startDate.atStartOfDay());

        List<CourseOnlineMonthlyRevenueDTO> revenueData = paymentRepository
                .getMonthlyRevenueLast12Months(startTimestamp);
        Map<YearMonth, Double> revenueMap = new HashMap<>();

        // Chuyển đổi dữ liệu từ cơ sở dữ liệu thành Map để dễ dàng xử lý
        for (CourseOnlineMonthlyRevenueDTO dto : revenueData) {
            YearMonth yearMonth = YearMonth.of(dto.getYear(), dto.getMonth());
            revenueMap.put(yearMonth, dto.getTotalRevenue());
        }

        List<CourseOnlineMonthlyRevenueDTO> result = new ArrayList<>();
        // Tạo dữ liệu cho 12 tháng gần nhất
        for (int i = 0; i < 12; i++) {
            YearMonth yearMonth = YearMonth.now().minusMonths(i);
            Double totalRevenue = revenueMap.getOrDefault(yearMonth, 0.0);
            result.add(new CourseOnlineMonthlyRevenueDTO(yearMonth.getYear(), yearMonth.getMonthValue(), totalRevenue));
        }

        return result;
    }

    @Override
    public List<CourseOnlineRevenueDTO> getCourseOnlineTop10Revenue(User currenUser) {
        return courseOnlineStudentRepository.findTop10CoursesByRevenue();
    }

    @Override
    public List<TutorRevenueDTO> getTutorTop10Revenue(User currenUser) {
        return paymentRepository.findTop10CoursesByRevenue();
    }

    @Override
    public int getCountClasses(User currenUser) {
        return (int) classesRepository.count();
    }

    @Override
    public int getCountStaff(User currenUser) {
        return (int) userRepository.count();
    }

    @Override
    public int getCountOnline(User currenUser) {
        return (int) courseOnlineRepository.count();
    }

    @Override
    public int getCountOffline(User currenUser) {
        return (int) courseOfflineRepository.count();
    }

    private Set<Role> convertAuthoritiesToRoles(Collection<? extends GrantedAuthority> authorities) {
        return authorities.stream()
                .map(grantedAuthority -> Role.valueOf(grantedAuthority.getAuthority()))
                .collect(Collectors.toSet());
    }
}
