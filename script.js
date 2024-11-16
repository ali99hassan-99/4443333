// وظيفة لعرض الاشتراكات (يمكنك تعديلها لاسترجاع البيانات من قاعدة بيانات أو من ملف)
function loadSubscriptions() {
    const subscriptionsList = document.getElementById("subscriptions-list");
    subscriptionsList.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>الرقم</th>
                    <th>الاسم</th>
                    <th>الاشتراك</th>
                    <th>تاريخ الانتهاء</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>محمد أحمد</td>
                    <td>شهري</td>
                    <td>2024-12-01</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>أحمد علي</td>
                    <td>سنوي</td>
                    <td>2025-01-15</td>
                </tr>
            </tbody>
        </table>
    `;
}

// وظيفة لإظهار النموذج المناسب بناءً على الزر الذي تم الضغط عليه
function showForm(action) {
    const formContainer = document.getElementById("form-container");

    switch(action) {
        case 'add':
            formContainer.innerHTML = `
                <h3>إضافة اشتراك جديد</h3>
                <form>
                    <label for="name">الاسم:</label>
                    <input type="text" id="name" name="name" required>
                    <label for="subscription-type">نوع الاشتراك:</label>
                    <select id="subscription-type" name="subscription-type">
                        <option value="شهري">شهري</option>
                        <option value="سنوي">سنوي</option>
                    </select>
                    <label for="expiry-date">تاريخ الانتهاء:</label>
                    <input type="date" id="expiry-date" name="expiry-date" required>
                    <button type="submit">إضافة</button>
                </form>
            `;
            break;

        case 'delete':
            formContainer.innerHTML = `
                <h3>حذف اشتراك</h3>
                <form>
                    <label for="subscription-id">رقم الاشتراك:</label>
                    <input type="text" id="subscription-id" name="subscription-id" required>
                    <button type="submit">حذف</button>
                </form>
            `;
            break;

        case 'search':
            formContainer.innerHTML = `
                <h3>البحث عن اشتراك</h3>
                <form>
                    <label for="search-name">اسم الاشتراك:</label>
                    <input type="text" id="search-name" name="search-name" required>
                    <button type="submit">بحث</button>
                </form>
            `;
            break;

        case 'renew':
            formContainer.innerHTML = `
                <h3>تجديد اشتراك</h3>
                <form>
                    <label for="renew-id">رقم الاشتراك:</label>
                    <input type="text" id="renew-id" name="renew-id" required>
                    <button type="submit">تجديد</button>
                </form>
            `;
            break;

        default:
            formContainer.innerHTML = '';
    }
}
