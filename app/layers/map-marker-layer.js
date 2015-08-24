import MarkerLayer from 'ember-leaflet/layers/marker';
import DraggableMixin from 'ember-leaflet/mixins/draggable';

export default MarkerLayer.extend(DraggableMixin, {
  click: function(e) { alert('hi!'); },
  dblclick: function(e) { alert('hi again!'); }
});
