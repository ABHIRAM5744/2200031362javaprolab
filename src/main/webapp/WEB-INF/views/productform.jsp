<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <title>Product Form</title>
</head>
<body>
    <h2>Product Form</h2>
    <form action="${pageContext.request.contextPath}/SpringMVC/submit-product" method="post">
        <div>
            <label>Product ID:</label>
            <input type="number" name="productId" required>
        </div>
        <div>
            <label>Product Name:</label>
            <input type="text" name="productName" required>
        </div>
        <div>
            <label>Price:</label>
            <input type="number" step="0.01" name="price" required>
        </div>
        <div>
            <label>Description:</label>
            <textarea name="description" required></textarea>
        </div>
        <button type="submit">Submit</button>
    </form>
</body>
</html>