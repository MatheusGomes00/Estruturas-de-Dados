import random, math
def inteiroAleatorio(num):
    valor = random.randint(0, num)
    return valor



while True:
    opcao = inteiroAleatorio(20)
    print(f"Opção escolhida foi {opcao}")
    if opcao == 1:
        break

print("FIM")
