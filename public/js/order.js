const orderListWpr = document.querySelector(".orderList");
const orderList = document.querySelectorAll(".orderList .order");
const selectedOrderListWpr = document.querySelector(".selectedOrderList");

const handleOrderClick = (order) => {
    const orderCard = order.parentNode;
    const checkbox = orderCard.querySelector("input");
    checkbox.checked = !checkbox.checked;
    handleSelectedOrders();
};

const handleSelectedOrders = () => {
    selectedOrderListWpr.innerHTML = "";
    for (let order of orderList) {
        const customerName = order.querySelector("h3").innerText;
        const orderId = order.querySelector(".orderId").outerHTML;
        const address = order.querySelector(".address").outerHTML;
        const checkbox = order.querySelector("input");
        if (checkbox.checked) {
            selectedOrderListWpr.innerHTML += `
                <li>
                    <h4 class="name">${customerName}</h4>
                    <div>
                        ${address}
                        ${orderId}
                    </div>
                </li>
            `;
        }
    }
};
