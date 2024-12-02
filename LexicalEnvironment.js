<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        function outer() {
            let outerVar = 'I am outside';

            function closure() {
                console.log(outerVar);
            }
            return closure;
        }

        const myClosure = outer();
        myClosure();  // Output: 'I am outside'

    </script>
</body>

</html>
