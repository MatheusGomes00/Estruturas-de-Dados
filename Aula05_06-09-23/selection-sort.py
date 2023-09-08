from nomes_desord_reduzido import nomes
global pass_, comps, swap

def selection_sort(vetor, fn_comp): 
    pass_, comps, swap = 0, 0, 0 
    for selected in range(len(vetor) - 1):
        pass_ += 1
        menor = selected + 1
        for i in range((menor + 1), len(vetor)):
            if fn_comp(vetor[menor], vetor[i]):
                menor = i
                comps += 1
        if fn_comp(vetor[selected], vetor[menor]):
            vetor[selected], vetor[menor] = vetor[menor], vetor[selected]
            swap += 1
    print(pass_, comps, swap)
    return vetor



print(selection_sort(vetor=nomes, fn_comp=lambda obj1, obj2: obj1 > obj2))

# def fn_comp(obj1, obj2):
#     return obj1 > obj2


# lista_nomes = nomes
# print(selection_sort(lista_nomes, fn_comp))


