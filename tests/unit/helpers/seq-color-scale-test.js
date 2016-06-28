import { seqColorScale } from 'dummy/helpers/seq-color-scale';
import { module, test } from 'qunit';

module('Unit | Helper | seq color scale');

test('it functions as a sequential color scale helper', function (assert) {
  assert.throws(() => {
    seqColorScale([42], {});
  }, 'throws on an incorrect scale name');

  let result;
  result = seqColorScale(['magma'], {});
  assert.equal(result(0), '#000004');

  result = seqColorScale(['magma', [10, 15]], {});
  assert.equal(result(10), '#000004');

  result = seqColorScale(['viridis'], {});
  assert.ok(result, 'viridis is a valid scale type');

  result = seqColorScale(['INFERNO'], {});
  assert.ok(result, 'inferno is a valid scale type');

  result = seqColorScale(['plasma'], {});
  assert.ok(result, 'plasma is a valid scale type');

  result = seqColorScale(['Warm'], {});
  assert.ok(result, 'warm is a valid scale type');

  result = seqColorScale(['cool'], {});
  assert.ok(result, 'cool is a valid scale type');

  result = seqColorScale(['rainbow'], {});
  assert.ok(result, 'rainbow is a valid scale type');

  result = seqColorScale(['cubehelix'], {});
  assert.ok(result, 'cubehelix is a valid scale type');
});
