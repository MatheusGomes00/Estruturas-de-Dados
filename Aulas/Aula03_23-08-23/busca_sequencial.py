vetor1 = [1, 2, 3, 4, 5, 6, 7, 8]

valor = int(input("Entre com um valor: "))
for n in vetor1:
    if valor == vetor1[n]:
        posicao = vetor1[n]
        break
    else:
        pass

print(f"O valor {valor} está na posição: {posicao}")

        
