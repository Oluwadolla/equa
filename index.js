
        function solveQuadratic() {
            // Get the values of a, b, and c from the input fields
            var a = parseFloat(document.getElementById("a").value);
            var b = parseFloat(document.getElementById("b").value);
            var c = parseFloat(document.getElementById("c").value);

            // Calculate the discriminant
            var discriminant = b * b - 4 * a * c;

            // Check if the discriminant is positive, zero, or negative
            if (discriminant > 0) {
                var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
                var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
                document.getElementById("result").innerHTML = "Two real roots: x1 = " + x1 + ", x2 = " + x2;
            } else if (discriminant === 0) {
                var x = -b / (2 * a);
                document.getElementById("result").innerHTML = "One real root: x = " + x;
            } else {
                document.getElementById("result").innerHTML = "No real roots";
            }
        }
    

