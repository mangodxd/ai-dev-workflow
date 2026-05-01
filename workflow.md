# AI Agent Refactor Workflow (MiMo-V2-Pro)

This document outlines the reasoning and execution steps taken by the AI Agent to refactor the codebase.

## 1. Context Analysis
- **Input:** Current `src/` directory.
- **Task:** Identify anti-patterns and technical debt.
- **Finding:** Lack of centralized error handling leading to repetitive code and inconsistent API responses.

## 2. Logic Chain
1. **Architecture Design:** Propose a standalone Error Middleware using a custom `AppError` class.
2. **Transformation:** Strip repetitive try-catch blocks and replace with `next()` calls.
3. **Verification:** Generate Jest unit tests to ensure the new middleware handles 404, 500, and operational errors correctly.