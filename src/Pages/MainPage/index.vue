<template>
  <div class="tab-inicio">
    <JSText
      class="margin-bottom"
      variant="subtitle"
    >
      ¿Qué es LoL Hate?
    </JSText>
    <JSText
      class="margin-bottom"
      variant="description"
    >
      Debido a la falta de un sistema de registro de las experiencias
      entre los jugadores en partidas de League of Legends surge LoL Hate.
      Un lugar donde se puede comentar, registrar y revisar experiencias
      propias o de otros jugadores a través de su nombre de invocador.
    </JSText>
    <JSText
      class="margin-bottom"
      variant="description"
    >
      No solo se busca generar registros, sino ofrecer un espacio donde
      cualquier invocador puedes desahogar cualquier sentimiento proveniente de la conclusión
      de una partida de League of Legends, sin importar si es una victoria o derrota.
    </JSText>
    <JSText
      class="margin-bottom"
      variant="subtitle"
    >
      ¿Cómo usar la plataforma?
    </JSText>
    <JSText
      class="margin-bottom"
      variant="description"
    >
      Usar LoL Hate es fácil, puedes buscar un jugador a través de su nombre de invocador
      y darle un vistazo a los comentarios que se hayan generado hasta ese momento.
    </JSText>
    <JSText
      class="margin-bottom"
      variant="description"
    >
      Por otra parte, si deseas escribir algún comentario, insulto, propuesta, recomendación, etc...
      puedes dar click sobre la pequeña pestaña con el texto <strong>reportar</strong> y generar
      un comentario para ese jugador
    </JSText>
    <JSText
      class="margin-bottom"
      variant="subtitle"
    >
      Información adicional
    </JSText>
    <JSText variant="description">
      LoL Hate se encuentra en fase beta, es posible que se apliquen cambios o mejoras en la plataforma,
      debido a esto, existe la posibilidad de que los registros o comentarios sobre los jugadores sean
      eliminados. Esperamos que no sea así.
    </JSText>
  </div>
</template>
<script>
export default {
    name: 'IndexMainPage',

}
</script>

<style scoped>
.tab-inicio{
  width: 50%;
}
.margin-bottom{
  margin-bottom: 12px;
}
</style>
