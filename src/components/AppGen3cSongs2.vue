<template>
  <div class="card-body">
    <p v-for="item in details.TamSong">
      {{ item }}
    </p>
    <div class="card-header" role="tab" :id="'subheading1Songs'+String(details.Id)">
      <h5 class="mb-0">
        <a class="collapsed" data-toggle="collapse" :href="'#'+'subitem1Song'+String(details.Id)" aria-expanded="false" :aria-controls="'subitem1Song'+String(details.Id)">
          Song # {{ details.Id }} .1 - Word by Word Meaning
        </a>
      </h5>
    </div>
    <!-- <div :id="'subitem1Song'+String(details.Id)" class="collapse" role="tabpanel" :aria-labelledby="'subheading1Songs'+String(details.Id)" :data-parent="'#'+'headingSongs'+String(details.Id)"> -->
    <div :id="'subitem1Song'+String(details.Id)" class="collapse" role="tabpanel" :aria-labelledby="'subheading1Songs'+String(details.Id)" :data-parent="'subheading1Songs'+String(details.Id)">
      <div class="card-body">
        <!-- <p v-for="item in details.TamTblWords.map(function(e, i) { return [e, details.TamTblMeanings[i]];}) ">
          {{ item[0,0] }}
        </p> -->
        <table>
          <tr>
            <th>Word</th>
            <th>Meaning</th>
          </tr>
          <tr v-for="item in details.TamTblWords.map(function(e, i) { return [e, details.TamTblMeanings[i]];}) ">
            <td>{{ item[0,0] }}</td>
            <td>{{ item[0,1] }}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="card-header" role="tab" :id="'subheading2Songs'+String(details.Id)">
      <h5 class="mb-0">
        <a class="collapsed" data-toggle="collapse" :href="'#'+'subitem2Song'+String(details.Id)" aria-expanded="false" :aria-controls="'subitem2Song'+String(details.Id)">
          Song # {{ details.Id }} .2 - Tamil Explanation
        </a>
      </h5>
    </div>
    <div :id="'subitem2Song'+String(details.Id)" class="collapse" role="tabpanel" :aria-labelledby="'subheading2Songs'+String(details.Id)" :data-parent="'subheading2Songs'+String(details.Id)">
      <div class="card-body">
        <h5>ஸ்ரீ காஞ்சி பிரதிவாதி பயங்கரம் அண்ணங்கராசாரியார் எழுதிய விளக்க உரை</h5>
        <p v-for="item in details.TamExpln">
          {{ item }}
        </p>
      </div>
    </div>
    <div class="card-header" role="tab" :id="'subheading3Songs'+String(details.Id)">
      <h5 class="mb-0">
        <a class="collapsed" data-toggle="collapse" :href="'#'+'subitem3Song'+String(details.Id)" aria-expanded="false" :aria-controls="'subitem3Song'+String(details.Id)">
          Song # {{ details.Id }} .3 - English explanation
        </a>
      </h5>
    </div>
    <div :id="'subitem3Song'+String(details.Id)" class="collapse" role="tabpanel" :aria-labelledby="'subheading3Songs'+String(details.Id)" :data-parent="'subheading3Songs'+String(details.Id)">
      <div class="card-body">
        <p v-for="item in details.EngExpln">
          {{ item }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['details']
}


</script>
<style>
table {
  border: 1px solid black;
  font: 16px ;
}
th {
  background-color: rgb(228, 240, 245);
}

th,td {
  border: 1px solid black;
  padding:4px 6px;
}
</style>
