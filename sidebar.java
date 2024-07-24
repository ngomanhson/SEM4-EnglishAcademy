package com.englishacademy.EnglishAcademy.services.impl;

import com.englishacademy.EnglishAcademy.dtos.admin.Menu;
import com.englishacademy.EnglishAcademy.dtos.admin.MenuItem;
import com.englishacademy.EnglishAcademy.entities.Role;
import com.englishacademy.EnglishAcademy.entities.User;
import com.englishacademy.EnglishAcademy.services.AdminService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class AdminServiceImpl implements AdminService {
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
            menuItems3.add(new MenuItem("Classes", "/classes", "fas fa-school"));
            menuItems4.add(new MenuItem("Booking", "/booking", "fas fa-calendar-alt"));
            menuItems4.add(new MenuItem("Room", "/room", "fas fa-door-open"));
            menuItems4.add(new MenuItem("Tutor Registration", "/tutor/registration", "fas fa-user-edit"));
            menuItems5.add(new MenuItem("Entrance Test", "/entrance-test", "fas fa-window-restore"));
            menuItems6.add(new MenuItem("Profile", "/profile", "fas fa-user-shield"));
            menus.add(new Menu("Dashboard", menuItems1));
            menus.add(new Menu("Course & Lesson", menuItems2));
            menus.add(new Menu("Classes", menuItems3));
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
            List<MenuItem> menuItems2 = new ArrayList<>();
            List<MenuItem> menuItems3 = new ArrayList<>();
            List<MenuItem> menuItems4 = new ArrayList<>();
            List<MenuItem> menuItems5 = new ArrayList<>();
            List<MenuItem> menuItems6 = new ArrayList<>();
            menuItems1.add(new MenuItem("Dashboard", "/", "far fa-chart-bar"));
            menuItems2.add(new MenuItem("Course Online", "/course-online", "fas fa-book-reader"));
            menuItems2.add(new MenuItem("Course Offline", "/course-offline", "fas fa-book-reader"));
            menuItems2.add(new MenuItem("Categories", "/category-list", "fas fa-stream"));
            menuItems3.add(new MenuItem("Classes", "/classes", "fas fa-school"));
            menuItems4.add(new MenuItem("Booking", "/booking", "fas fa-calendar-alt"));
            menuItems4.add(new MenuItem("Room", "/room", "fas fa-door-open"));
            menuItems4.add(new MenuItem("Tutor Registration", "/tutor/registration", "fas fa-user-edit"));
            menuItems5.add(new MenuItem("Entrance Test", "/entrance-test", "fas fa-window-restore"));
            menuItems6.add(new MenuItem("Profile", "/profile", "fas fa-user-shield"));
            menus.add(new Menu("Dashboard", menuItems1));
            menus.add(new Menu("Course & Lesson", menuItems2));
            menus.add(new Menu("Classes", menuItems3));
            menus.add(new Menu("Teacher & Tutor", menuItems4));
            menus.add(new Menu("Entrance Test", menuItems5));
            menus.add(new Menu("Information", menuItems6));
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

    private Set<Role> convertAuthoritiesToRoles(Collection<? extends GrantedAuthority> authorities) {
        return authorities.stream()
                .map(grantedAuthority -> Role.valueOf(grantedAuthority.getAuthority()))
                .collect(Collectors.toSet());
    }
}
