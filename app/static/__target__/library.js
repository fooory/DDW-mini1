// Transcrypt'ed from Python, 2023-10-03 13:55:51
var random = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_random__ from './random.js';
__nest__ (random, '', __module_random__);
var __name__ = '__main__';
export var gen_random_int = function (number, seed) {
	var result = [];
	random.seed (seed);
	for (var i = 0; i < number; i++) {
		result.append (i);
	}
	random.shuffle (result);
	return result;
};
export var generate = function () {
	var number = 10;
	var seed = 200;
	var array = gen_random_int (10, 200);
	var array_str = '';
	for (var i = 0; i < len (array); i++) {
		array_str += str (array [i]) + ', ';
	}
	var array_str = array_str.__getslice__ (0, -(2), 1);
	array_str += '.';
	document.getElementById ('generate').innerHTML = array_str;
	return array_str;
};
export var sortnumber1 = function () {
	var array = document.getElementById ('generate').innerHTML;
	var array = list (array);
	var array1 = [];
	for (var i = 0; i < len (array) - 1; i += 3) {
		array1.append (int (array [i]));
	}
	bubble_sort (array1);
	var array_str = '';
	for (var i = 0; i < len (array1); i++) {
		array_str += str (array1 [i]) + ', ';
	}
	var array_str = array_str.__getslice__ (0, -(2), 1);
	array_str += '.';
	document.getElementById ('sorted').innerHTML = array_str;
	return array_str;
};
export var bubble_sort = function (array) {
	var count = 0;
	var n = len (array);
	var swapped = true;
	while (swapped) {
		var swapped = false;
		for (var idx = 1; idx < n; idx++) {
			count++;
			if (array [idx - 1] > array [idx]) {
				var __left0__ = tuple ([array [idx], array [idx - 1]]);
				array [idx - 1] = __left0__ [0];
				array [idx] = __left0__ [1];
				var swapped = true;
			}
		}
	}
	return ;
};
export var sortnumber2 = function () {
	var value = document.getElementsByName ('numbers') [0].value;
	if (value == '') {
		window.alert ('Your textbox is empty');
		return ;
	}
	var new_number = value.py_replace (' ', '').py_split (',');
	var new_array = (function () {
		var __accu0__ = [];
		for (var num of new_number) {
			__accu0__.append (int (num));
		}
		return __accu0__;
	}) ();
	bubble_sort (new_array);
	var array_str = '';
	for (var i = 0; i < len (new_array); i++) {
		array_str += str (new_array [i]) + ', ';
	}
	var array_str = array_str.__getslice__ (0, -(2), 1);
	array_str += '.';
	document.getElementById ('mickey').innerHTML = 'bingbongbeepboop this is your sorted array:';
	document.getElementById ('sorted').innerHTML = array_str;
	return array_str;
};

//# sourceMappingURL=library.map