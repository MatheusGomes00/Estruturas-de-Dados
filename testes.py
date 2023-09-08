import random, math
# def inteiroAleatorio(num):
#     valor = random.randint(0, num)
#     return valor



# while True:
#     opcao = inteiroAleatorio(20)
#     print(f"Opção escolhida foi {opcao}")
#     if opcao == 1:
#         break

# print("FIM")

# lista = [55, 33, 23, 5, 3, 10, 7, 80, 250, 111, 20]
# ordenada = sorted(lista)
# print(ordenada)
# inicio = min(ordenada)
# fim = max(ordenada)
# num = 23
# meio = int(len(ordenada) / 2)

def bubble_sort(vetor):
    return sorted(map(int, vetor))


lista = [500, 22, 33, 11, 2, 55, 23]
print(bubble_sort(lista))
