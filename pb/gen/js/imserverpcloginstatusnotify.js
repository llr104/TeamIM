/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.IM.Server.IMServerPCLoginStatusNotify');

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
proto.IM.Server.IMServerPCLoginStatusNotify = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.IM.Server.IMServerPCLoginStatusNotify, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.IM.Server.IMServerPCLoginStatusNotify.displayName = 'proto.IM.Server.IMServerPCLoginStatusNotify';
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
proto.IM.Server.IMServerPCLoginStatusNotify.prototype.toObject = function(opt_includeInstance) {
  return proto.IM.Server.IMServerPCLoginStatusNotify.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.IM.Server.IMServerPCLoginStatusNotify} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IM.Server.IMServerPCLoginStatusNotify.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    loginStatus: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.IM.Server.IMServerPCLoginStatusNotify}
 */
proto.IM.Server.IMServerPCLoginStatusNotify.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.IM.Server.IMServerPCLoginStatusNotify;
  return proto.IM.Server.IMServerPCLoginStatusNotify.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.IM.Server.IMServerPCLoginStatusNotify} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.IM.Server.IMServerPCLoginStatusNotify}
 */
proto.IM.Server.IMServerPCLoginStatusNotify.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLoginStatus(value);
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
proto.IM.Server.IMServerPCLoginStatusNotify.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.IM.Server.IMServerPCLoginStatusNotify.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.IM.Server.IMServerPCLoginStatusNotify} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IM.Server.IMServerPCLoginStatusNotify.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getLoginStatus();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 user_id = 1;
 * @return {number}
 */
proto.IM.Server.IMServerPCLoginStatusNotify.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.IM.Server.IMServerPCLoginStatusNotify.prototype.setUserId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 login_status = 2;
 * @return {number}
 */
proto.IM.Server.IMServerPCLoginStatusNotify.prototype.getLoginStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.IM.Server.IMServerPCLoginStatusNotify.prototype.setLoginStatus = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};

