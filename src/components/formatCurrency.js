export function formatCurrency(value) {
    // Chuyển đổi số sang dạng tiền tệ với phân cách hàng nghìn
    // Ví dụ ở đây chúng ta sử dụng locale 'vi-VN' cho tiếng Việt
    return value.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
    });
}
