/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.spiderrpc.BlogFeed', null, global);
goog.exportSymbol('proto.spiderrpc.CrawlTaskResult', null, global);
goog.exportSymbol('proto.spiderrpc.RssFeed', null, global);
goog.exportSymbol('proto.spiderrpc.SpiderList', null, global);
goog.exportSymbol('proto.spiderrpc.SubmitResult', null, global);
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
proto.spiderrpc.RssFeed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.spiderrpc.RssFeed.repeatedFields_, null);
};
goog.inherits(proto.spiderrpc.RssFeed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.spiderrpc.RssFeed.displayName = 'proto.spiderrpc.RssFeed';
}
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
proto.spiderrpc.SubmitResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spiderrpc.SubmitResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.spiderrpc.SubmitResult.displayName = 'proto.spiderrpc.SubmitResult';
}
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
proto.spiderrpc.BlogFeed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.spiderrpc.BlogFeed.repeatedFields_, null);
};
goog.inherits(proto.spiderrpc.BlogFeed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.spiderrpc.BlogFeed.displayName = 'proto.spiderrpc.BlogFeed';
}
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
proto.spiderrpc.SpiderList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.spiderrpc.SpiderList.repeatedFields_, null);
};
goog.inherits(proto.spiderrpc.SpiderList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.spiderrpc.SpiderList.displayName = 'proto.spiderrpc.SpiderList';
}
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
proto.spiderrpc.CrawlTaskResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.spiderrpc.CrawlTaskResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.spiderrpc.CrawlTaskResult.displayName = 'proto.spiderrpc.CrawlTaskResult';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.spiderrpc.RssFeed.repeatedFields_ = [4];



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
proto.spiderrpc.RssFeed.prototype.toObject = function(opt_includeInstance) {
  return proto.spiderrpc.RssFeed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spiderrpc.RssFeed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.spiderrpc.RssFeed.toObject = function(includeInstance, msg) {
  var obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    category: jspb.Message.getFieldWithDefault(msg, 2, ""),
    itemContentXpath: jspb.Message.getFieldWithDefault(msg, 3, ""),
    removedXpathNodesList: jspb.Message.getRepeatedField(msg, 4)
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
 * @return {!proto.spiderrpc.RssFeed}
 */
proto.spiderrpc.RssFeed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spiderrpc.RssFeed;
  return proto.spiderrpc.RssFeed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spiderrpc.RssFeed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spiderrpc.RssFeed}
 */
proto.spiderrpc.RssFeed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setItemContentXpath(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addRemovedXpathNodes(value);
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
proto.spiderrpc.RssFeed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.spiderrpc.RssFeed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.spiderrpc.RssFeed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.spiderrpc.RssFeed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getItemContentXpath();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRemovedXpathNodesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.spiderrpc.RssFeed.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.spiderrpc.RssFeed.prototype.setUrl = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.spiderrpc.RssFeed.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.spiderrpc.RssFeed.prototype.setCategory = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string item_content_xpath = 3;
 * @return {string}
 */
proto.spiderrpc.RssFeed.prototype.getItemContentXpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.spiderrpc.RssFeed.prototype.setItemContentXpath = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string removed_xpath_nodes = 4;
 * @return {!Array<string>}
 */
proto.spiderrpc.RssFeed.prototype.getRemovedXpathNodesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/** @param {!Array<string>} value */
proto.spiderrpc.RssFeed.prototype.setRemovedXpathNodesList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.spiderrpc.RssFeed.prototype.addRemovedXpathNodes = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.spiderrpc.RssFeed.prototype.clearRemovedXpathNodesList = function() {
  this.setRemovedXpathNodesList([]);
};





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
proto.spiderrpc.SubmitResult.prototype.toObject = function(opt_includeInstance) {
  return proto.spiderrpc.SubmitResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spiderrpc.SubmitResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.spiderrpc.SubmitResult.toObject = function(includeInstance, msg) {
  var obj = {
    error: jspb.Message.getFieldWithDefault(msg, 1, false),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.spiderrpc.SubmitResult}
 */
proto.spiderrpc.SubmitResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spiderrpc.SubmitResult;
  return proto.spiderrpc.SubmitResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spiderrpc.SubmitResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spiderrpc.SubmitResult}
 */
proto.spiderrpc.SubmitResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setError(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
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
proto.spiderrpc.SubmitResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.spiderrpc.SubmitResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.spiderrpc.SubmitResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.spiderrpc.SubmitResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bool error = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.spiderrpc.SubmitResult.prototype.getError = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.spiderrpc.SubmitResult.prototype.setError = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.spiderrpc.SubmitResult.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.spiderrpc.SubmitResult.prototype.setMessage = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.spiderrpc.BlogFeed.repeatedFields_ = [7];



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
proto.spiderrpc.BlogFeed.prototype.toObject = function(opt_includeInstance) {
  return proto.spiderrpc.BlogFeed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spiderrpc.BlogFeed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.spiderrpc.BlogFeed.toObject = function(includeInstance, msg) {
  var obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    category: jspb.Message.getFieldWithDefault(msg, 2, ""),
    entryXpath: jspb.Message.getFieldWithDefault(msg, 3, ""),
    itemTitleXpath: jspb.Message.getFieldWithDefault(msg, 4, ""),
    itemLinkXpath: jspb.Message.getFieldWithDefault(msg, 5, ""),
    itemContentXpath: jspb.Message.getFieldWithDefault(msg, 6, ""),
    removedXpathNodesList: jspb.Message.getRepeatedField(msg, 7)
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
 * @return {!proto.spiderrpc.BlogFeed}
 */
proto.spiderrpc.BlogFeed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spiderrpc.BlogFeed;
  return proto.spiderrpc.BlogFeed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spiderrpc.BlogFeed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spiderrpc.BlogFeed}
 */
proto.spiderrpc.BlogFeed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntryXpath(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setItemTitleXpath(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setItemLinkXpath(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setItemContentXpath(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addRemovedXpathNodes(value);
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
proto.spiderrpc.BlogFeed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.spiderrpc.BlogFeed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.spiderrpc.BlogFeed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.spiderrpc.BlogFeed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEntryXpath();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getItemTitleXpath();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getItemLinkXpath();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getItemContentXpath();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getRemovedXpathNodesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.spiderrpc.BlogFeed.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.spiderrpc.BlogFeed.prototype.setUrl = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.spiderrpc.BlogFeed.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.spiderrpc.BlogFeed.prototype.setCategory = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string entry_xpath = 3;
 * @return {string}
 */
proto.spiderrpc.BlogFeed.prototype.getEntryXpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.spiderrpc.BlogFeed.prototype.setEntryXpath = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string item_title_xpath = 4;
 * @return {string}
 */
proto.spiderrpc.BlogFeed.prototype.getItemTitleXpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.spiderrpc.BlogFeed.prototype.setItemTitleXpath = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string item_link_xpath = 5;
 * @return {string}
 */
proto.spiderrpc.BlogFeed.prototype.getItemLinkXpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.spiderrpc.BlogFeed.prototype.setItemLinkXpath = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string item_content_xpath = 6;
 * @return {string}
 */
proto.spiderrpc.BlogFeed.prototype.getItemContentXpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.spiderrpc.BlogFeed.prototype.setItemContentXpath = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated string removed_xpath_nodes = 7;
 * @return {!Array<string>}
 */
proto.spiderrpc.BlogFeed.prototype.getRemovedXpathNodesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/** @param {!Array<string>} value */
proto.spiderrpc.BlogFeed.prototype.setRemovedXpathNodesList = function(value) {
  jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.spiderrpc.BlogFeed.prototype.addRemovedXpathNodes = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.spiderrpc.BlogFeed.prototype.clearRemovedXpathNodesList = function() {
  this.setRemovedXpathNodesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.spiderrpc.SpiderList.repeatedFields_ = [1];



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
proto.spiderrpc.SpiderList.prototype.toObject = function(opt_includeInstance) {
  return proto.spiderrpc.SpiderList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spiderrpc.SpiderList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.spiderrpc.SpiderList.toObject = function(includeInstance, msg) {
  var obj = {
    spiderList: jspb.Message.getRepeatedField(msg, 1)
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
 * @return {!proto.spiderrpc.SpiderList}
 */
proto.spiderrpc.SpiderList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spiderrpc.SpiderList;
  return proto.spiderrpc.SpiderList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spiderrpc.SpiderList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spiderrpc.SpiderList}
 */
proto.spiderrpc.SpiderList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addSpider(value);
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
proto.spiderrpc.SpiderList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.spiderrpc.SpiderList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.spiderrpc.SpiderList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.spiderrpc.SpiderList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpiderList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string spider = 1;
 * @return {!Array<string>}
 */
proto.spiderrpc.SpiderList.prototype.getSpiderList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<string>} value */
proto.spiderrpc.SpiderList.prototype.setSpiderList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.spiderrpc.SpiderList.prototype.addSpider = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.spiderrpc.SpiderList.prototype.clearSpiderList = function() {
  this.setSpiderList([]);
};





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
proto.spiderrpc.CrawlTaskResult.prototype.toObject = function(opt_includeInstance) {
  return proto.spiderrpc.CrawlTaskResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.spiderrpc.CrawlTaskResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.spiderrpc.CrawlTaskResult.toObject = function(includeInstance, msg) {
  var obj = {
    isrunning: jspb.Message.getFieldWithDefault(msg, 1, false)
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
 * @return {!proto.spiderrpc.CrawlTaskResult}
 */
proto.spiderrpc.CrawlTaskResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.spiderrpc.CrawlTaskResult;
  return proto.spiderrpc.CrawlTaskResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.spiderrpc.CrawlTaskResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.spiderrpc.CrawlTaskResult}
 */
proto.spiderrpc.CrawlTaskResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsrunning(value);
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
proto.spiderrpc.CrawlTaskResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.spiderrpc.CrawlTaskResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.spiderrpc.CrawlTaskResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.spiderrpc.CrawlTaskResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsrunning();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool isrunning = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.spiderrpc.CrawlTaskResult.prototype.getIsrunning = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.spiderrpc.CrawlTaskResult.prototype.setIsrunning = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


goog.object.extend(exports, proto.spiderrpc);
