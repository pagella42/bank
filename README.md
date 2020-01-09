RUN WITH COMMAND:
    npm run dev


IMPLEMENTATION OF BANK

AVAILABLE OPERATIONS:
        -Debit
        -Credit
SERVERS APIs:
        -GET: /transactions
            -serves transaction history. Blocks other transactions
        -GET: /transaction/:id
            -serves one trnsaction by its id
        -POST: /newtransaction
            -posts new transactions. Blocks other requests

