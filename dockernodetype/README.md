# Dockernode

O conteúdo deste repositório foi uma prática de desenvolvimento de Node.js com Typescript para utilizar o Docker.
Como encontrei problemas em outros projetos, resolvi criar esse para ver passo a passo de como poderia solucionar o problema, e vi que adicionando a Flag ```--poll```, no ts-node-dev, o meu problema seria solucionado.

O link para consulta sobre legacy waatch mode com ts-node-dev é o seguinte:
https://github.com/wclr/ts-node-dev/issues/55

<details>

<summary>Problema encontrado em outros projetos</summary>

- O servidor não dava restart quando algo era alterado no projeto. O que agora é possível solucionar com a flag ```--poll```

</details>