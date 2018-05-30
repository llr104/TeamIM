/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.IM.Server.IMPushToUserRsp');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.IM.BaseDefine.PushResult');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.IM.Server.IMPushToUserRsp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.IM.Server.IMPushToUserRsp.repeatedFields_, null);
};
goog.inherits(proto.IM.Server.IMPushToUserRsp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.IM.Server.IMPushToUserRsp.displayName = 'proto.IM.Server.IMPushToUserRsp';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.IM.Server.IMPushToUserRsp.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.IM.Server.IMPushToUserRsp.prototype.toObject = function(opt_includeInstance) {
  return proto.IM.Server.IMPushToUserRsp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.IM.Server.IMPushToUserRsp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IM.Server.IMPushToUserRsp.toObject = function(includeInstance, msg) {
  var f, obj = {
    pushResultListList: jspb.Message.toObjectList(msg.getPushResultListList(),
    proto.IM.BaseDefine.PushResult.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.IM.Server.IMPushToUserRsp}
 */
proto.IM.Server.IMPushToUserRsp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.IM.Server.IMPushToUserRsp;
  return proto.IM.Server.IMPushToUserRsp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.IM.Server.IMPushToUserRsp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.IM.Server.IMPushToUserRsp}
 */
proto.IM.Server.IMPushToUserRsp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.IM.BaseDefine.PushResult;
      reader.readMessage(value,proto.IM.BaseDefine.PushResult.deserializeBinaryFromReader);
      msg.addPushResultList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.IM.Server.IMPushToUserRsp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.IM.Server.IMPushToUserRsp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.IM.Server.IMPushToUserRsp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IM.Server.IMPushToUserRsp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPushResultListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.IM.BaseDefine.PushResult.serializeBinaryToWriter
    );
  }
};


/**
 * repeated IM.BaseDefine.PushResult push_result_list = 1;
 * @return {!Array.<!proto.IM.BaseDefine.PushResult>}
 */
proto.IM.Server.IMPushToUserRsp.prototype.getPushResultListList = function() {
  return /** @type{!Array.<!proto.IM.BaseDefine.PushResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.IM.BaseDefine.PushResult, 1));
};


/** @param {!Array.<!proto.IM.BaseDefine.PushResult>} value */
proto.IM.Server.IMPushToUserRsp.prototype.setPushResultListList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.IM.BaseDefine.PushResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.IM.BaseDefine.PushResult}
 */
proto.IM.Server.IMPushToUserRsp.prototype.addPushResultList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.IM.BaseDefine.PushResult, opt_index);
};


proto.IM.Server.IMPushToUserRsp.prototype.clearPushResultListList = function() {
  this.setPushResultListList([]);
};

