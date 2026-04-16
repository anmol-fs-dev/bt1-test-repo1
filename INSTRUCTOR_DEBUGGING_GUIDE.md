# 🕵️‍♂️ Weather App Instructor's Debugging Guide

This document contains all 10 intentional bugs introduced into the SkyCast Weather App. This is for instructor use only to help students debug the application.

---

### 🛠️ Master Bug List & Solutions

| # | File | Line | Bug Type | Code Change (Solution) | Rationale |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | `App.jsx` | 2 | **Import Logic** | Change `import { Search }` to `import Search` | `Search` is a default export. Named imports expect a specific named variable, causing an "undefined" error. |
| **2** | `App.jsx` | 31 | **Hooks Dependency** | Change `}, []);` to `}, [city]);` | An empty array prevents the search from refreshing. Adding `city` triggers fetch on every new search. |
| **3** | `App.jsx` | 43 | **Prop Name** | Change `onCityChange` to `onSearch` | The child component `Search.jsx` expects a prop named `onSearch`. Names must match for communication. |
| **4** | `Search.jsx` | 6 | **DOM Event** | Add `e.preventDefault();` | Browsers refresh forms by default. This stops the refresh so the app state is preserved. |
| **5** | `Search.jsx` | 16 | **JSX Syntax** | Change `class` to `className` | `class` is a reserved JS keyword. React requires `className` for styling elements. |
| **6** | `Search.jsx` | 8 | **Commented Logic** | Uncomment `onSearch(query);` | The logic to notify the parent about the search was disabled, making the search button "do nothing". |
| **7** | `WeatherCard.jsx` | 4 | **Logic Flip** | Change `if (data)` to `if (!data)` | The current logic tells the component to hide if data exists. Inverting it ensures it shows ONLY when data is present. |
| **8** | `WeatherCard.jsx` | 6 | **Data Schema** | Change `current_conditions` to `current_condition` | The API uses singular naming. Accessing the plural version results in `undefined` and a crash. |
| **9** | `WeatherCard.jsx` | 14 | **Static Value** | Change `20°C` to `{current.temp_C}°C` | Hardcoded text ignores real-time data. Curly braces allow the injection of dynamic state variables. |
| **10** | `index.css` | 79 | **CSS Typo** | Change `--glss-bg` to `--glass-bg` | A typo in the variable name broke the glassmorphism effect. Fixing it restores the card visibility. |

---

### 📝 Instructor Notes for the Session

1. **The "Nothing Renders" Phase**: 
   - Bugs #1 and #7 are the biggest blockers. The app won't even show the UI properly until these are fixed.
2. **The "Doesn't Search" Phase**:
   - Bugs #2, #3, and #6 prevent searching from moving new data into the app.
3. **The "Style & Detail" Phase**:
   - Bugs #5, #9, and #10 are for the students who reach the end and need to polish the UI and fix console warnings.

**How to use:** Share the broken repository with students and provide hints based on the "Rationale" column if they get stuck!
