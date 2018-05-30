/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.IM.File.IMFileDelOfflineReq');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');


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
proto.IM.File.IMFileDelOfflineReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.IM.File.IMFileDelOfflineReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.IM.File.IMFileDelOfflineReq.displayName = 'proto.IM.File.IMFileDelOfflineReq';
}


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
proto.IM.File.IMFileDelOfflineReq.prototype.toObject = function(opt_includeInstance) {
  return proto.IM.File.IMFileDelOfflineReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.IM.File.IMFileDelOfflineReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IM.File.IMFileDelOfflineReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    fromUserId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    toUserId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    taskId: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.IM.File.IMFileDelOfflineReq}
 */
proto.IM.File.IMFileDelOfflineReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.IM.File.IMFileDelOfflineReq;
  return proto.IM.File.IMFileDelOfflineReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.IM.File.IMFileDelOfflineReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.IM.File.IMFileDelOfflineReq}
 */
proto.IM.File.IMFileDelOfflineReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFromUserId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setToUserId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaskId(value);
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
proto.IM.File.IMFileDelOfflineReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.IM.File.IMFileDelOfflineReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.IM.File.IMFileDelOfflineReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IM.File.IMFileDelOfflineReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFromUserId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToUserId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getTaskId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional uint32 from_user_id = 1;
 * @return {number}
 */
proto.IM.File.IMFileDelOfflineReq.prototype.getFromUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.IM.File.IMFileDelOfflineReq.prototype.setFromUserId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 to_user_id = 2;
 * @return {number}
 */
proto.IM.File.IMFileDelOfflineReq.prototype.getToUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.IM.File.IMFileDelOfflineReq.prototype.setToUserId = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string task_id = 3;
 * @return {string}
 */
proto.IM.File.IMFileDelOfflineReq.prototype.getTaskId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.IM.File.IMFileDelOfflineReq.prototype.setTaskId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};

