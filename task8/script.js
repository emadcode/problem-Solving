Array.prototype.sameStructureAs = function (other) {
    // دالة مساعدة للتحقق مما إذا كان الكائن مصفوفة
    const isArray = (o) => Array.isArray(o);

    // دالة رئيسية للمقارنة بين تراكيب المصفوفات
    const compareStructures = (arr1, arr2) => {
        // التحقق من أن كلا الكائنين مصفوفات
        if (!isArray(arr1) || !isArray(arr2)) {
            return false;
        }
        // التحقق من أن طول المصفوفات متساوي
        if (arr1.length !== arr2.length) {
            return false;
        }
        // التكرار عبر عناصر المصفوفات
        for (let i = 0; i < arr1.length; i++) {
            // إذا كان العنصر الحالي في كلا المصفوفتين مصفوفة، قم بالمقارنة بشكل متكرر
            if (isArray(arr1[i]) && isArray(arr2[i])) {
                if (!compareStructures(arr1[i], arr2[i])) {
                    return false;
                }
            // إذا كان أحد العناصر مصفوفة والآخر ليس مصفوفة، فالتراكيب ليست متساوية
            } else if (isArray(arr1[i]) !== isArray(arr2[i])) {
                return false;
            }
        }
        // إذا تمت اجتياز جميع الشروط، فإن التراكيب متساوية
        return true;
    };

    // استدعاء الدالة الرئيسية لمقارنة تركيب المصفوفة الحالية مع المصفوفة الأخرى
    return compareStructures(this, other);
};

// أمثلة على الاستخدام
console.log([1, 1, 1].sameStructureAs([2, 2, 2])); // true
console.log([1, [1, 1]].sameStructureAs([2, [2, 2]])); // true
console.log([1, [1, 1]].sameStructureAs([[2, 2], 2])); // false
console.log([1, [1, 1]].sameStructureAs([[2], 2])); // false
console.log([[[ ], [ ]]].sameStructureAs([[[ ], [ ]]])); // true
console.log([[[ ], [ ]]].sameStructureAs([[1, 1]])); // false
