

//Digital root is the recursive sum of all the digits in a number.

//Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
//Examples

  //  16  -->  1 + 6 = 7
   //942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
//132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
//493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digitalRoot(n) {
    // بداية، نقوم بإعلان دالة باسم digitalRoot والتي تأخذ عدداً واحداً كمدخل

    // نستخدم while loop للتأكد من أننا نستمر في العملية حتى نحصل على رقم واحد فقط
    while (n >= 10) {
        // نحول الرقم إلى سلسلة نصية لنتمكن من الوصول إلى كل رقم على حدة
        var digits = String(n).split('').map(Number);
        
        // نقوم بحساب مجموع جميع الأرقام باستخدام دالة reduce ونمرر لها دالة callback
        n = digits.reduce((a, b) => a + b, 0);
        // هنا، a هو القيمة المتراكمة (مجموع الأرقام) و b هو الرقم الحالي الذي نقوم بإضافته إليها
    }
    
    // في النهاية، نعيد القيمة النهائية التي هي الجذر الرقمي للعدد
    return n;
}

// نقوم بطباعة نتائج الاختبار
console.log(digitalRoot(16));      // الناتج: 7
console.log(digitalRoot(942));     // الناتج: 6
console.log(digitalRoot(132189));  // الناتج: 6
console.log(digitalRoot(493193));  // الناتج: 2





//
//function digitalRoot(n) {
    // Keep looping until n becomes a single digit
  //  while (n >= 10) {
        // Convert the number to a string to access its digits
    //    var digits = String(n).split('').map(Number);
        // Sum the digits
      //  n = digits.reduce((a, b) => a + b, 0);
    //}
    
    // Return the single-digit result
   // return n;
//}

// Test cases
//console.log(digitalRoot(16));      // Output: 7
//console.log(digitalRoot(942));     // Output: 6
//console.log(digitalRoot(132189));  // Output: 6
//console.log(digitalRoot(493193));  // Output: 2
