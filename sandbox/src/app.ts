interface Order {
    id: string;
    amount: number;
    currency: string;
}

interface Stripe {
    type: 'stripe';
    card: string;
    cvc: string;
}

interface PayPal {
    type: 'paypal';
    email: string;
}

type CheckoutCard = Order & Stripe;
type CheckoutPayPal = Order & PayPal;

const order: Order = {
    id: 'xj27s',
    amount: 100,
    currency: 'USD'
};

const orderCard: CheckoutCard = {
    ...order,
    type: 'stripe',
    card: '1000 2000 3000 400',
    cvc: '123',
};

const orderPayPal: CheckoutPayPal = {
    ...order,
    type: 'paypal',
    email: 'over@abr.foo',
};

type Payload = CheckoutCard | CheckoutPayPal;

function checkout(payload: Payload) {
    if (payload.type === 'stripe') {
        console.log(payload.card, payload.cvc);
    }
    if (payload.type === 'paypal') {
        console.log(payload.email);
    }
}